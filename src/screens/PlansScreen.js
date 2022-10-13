import {
  collection,
  onSnapshot,
  query,
  where,
  getDocs,
  orderBy,
  doc,
  setDoc,
  addDoc,
} from '@firebase/firestore';
import React, { useEffect, useState } from 'react';
import './PlansScreen.css';
import { db } from '../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { loadStripe } from '@stripe/stripe-js';

function PlansScreen() {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    const fetchProducts = async () => {
      // get all active subscription plans from firebase (created in Stripe and sync with firebase)
      const q = query(collection(db, 'products'), where('active', '==', true));
      const querySnapshot = await getDocs(q);
      const products = {};

      querySnapshot.forEach(async (productDoc) => {
        products[productDoc.id] = productDoc.data();

        // get nested prices from each product
        const priceColl = await query(
          collection(db, 'products', productDoc.id, 'prices'),
          orderBy('unit_amount', 'desc')
        );

        onSnapshot(priceColl, (priceSnap) => {
          priceSnap.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
      });

      setProducts(products);
    };

    fetchProducts();
  }, []);

  console.log(products);

  const loadCheckout = async (priceId) => {
    // const docRef = await db
    //   .collection('customers')
    //   .doc(user.uid)
    //   .collection('checkout_sessions')
    //   .add({
    //     price: priceId,
    //     success_url: window.location.origin,
    //     cancel_url: window.localion.origin,
    //   });

    // add subscription payment info to user profile
    const docRef = doc(
      collection(db, 'customers', user.uid, 'checkout_sessions')
    );

    setDoc(docRef, {
      price: priceId,
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    })
      .then((docRef) => {
        console.log(docRef.data());
        const { error, sessionId } = docRef.data();

        if (sessionId) {
          // redirect to checkout, init stripe
          const STRIPE_PUB_KEY =
            'pk_test_51Ls58kH8StdRae4ENiGVB72Sg521Wny1s5FoYKUNRsv60ByyNK3pv2RRO27XyHeOEg5LVGhbwekwoGQAw8DcKou700GRCkp2I4';
          const stripe = loadStripe(STRIPE_PUB_KEY);
          stripe.redirectToCheckout({ sessionId });
        }
      })
      .catch((error) => {
        if (error) {
          alert(`An error occurred: ${error.message}`);
        }
      });

    // PayRef.onSnapshot(async (snap) => {
    //   const { error, sessionId } = snap.data();

    //   if (sessionId) {
    //     // redirect to checkout, init stripe
    //     const STRIPE_PUB_KEY =
    //       'pk_test_51Ls58kH8StdRae4ENiGVB72Sg521Wny1s5FoYKUNRsv60ByyNK3pv2RRO27XyHeOEg5LVGhbwekwoGQAw8DcKou700GRCkp2I4';
    //     const stripe = await loadStripe(STRIPE_PUB_KEY);
    //     stripe.redirectToCheckout({ sessionId });
    //   }
    // });
  };

  return (
    <div className="plans-screen">
      {Object.entries(products).map(([productId, productData]) => {
        // TODO: add logic to check if user's subscription is active
        return (
          <div className="plans-screen__plan" key={productId}>
            <div className="plan-screen__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>

            <button
              className=""
              onClick={() => loadCheckout(productData.prices.priceId)}
            >
              Subscribe
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default PlansScreen;
