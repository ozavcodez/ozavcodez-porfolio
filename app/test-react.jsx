"use client";

import React, { createContext, useContext } from 'react';

// Test if createContext works
const TestContext = createContext(null);

const TestComponent = () => {
  return <div>Test Component</div>;
};

export default TestComponent;