import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

function getTotalCost(items) {
  var listCost = 0;
  items.forEach(item => {
    if (item.threshold > item.quantity) {
      listCost += item.price;
    }
  });
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  return formatter.format(listCost);
}

export default function Dashboard() {

  //check to make sure we are logged in
  if (!Auth.getToken()) {
    window.location.assign('/');
  }

  const { loading, data } = useQuery(QUERY_ME);

  const userData = data?.me || {};

  // use this to determine if `useEffect()` hook needs to run again
  const userDataLength = Object.keys(userData).length;

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <div className="min-h-full">
        <div className="py-10">
          <header>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight text-gray-900">Dashboard</h1>
            </div>
          </header>
          <main>
            <div>
              {

              }
              <h2>Your list costs</h2>
              { <h2>{getTotalCost(userData.items)}</h2> }
            </div>
            <h2>Grocery List</h2>
            {userData.items?.map((item) => {
              return (
                <>
                  {item.threshold > item.quantity &&
                  <h2>
                    {item.name}
                  </h2>
                  }
                </>
             );
            })}
          </main>
        </div>
      </div>
    </>
  )
}
