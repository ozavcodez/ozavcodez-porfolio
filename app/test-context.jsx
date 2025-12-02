"use client";

import React, { createContext, useContext } from 'react';

// Simple test context
const TestContext = createContext(null);

export const TestProvider = ({ children }) => {
  return (
    <TestContext.Provider value={{ test: "working" }}>
      {children}
    </TestContext.Provider>
  );
};

export const useTestContext = () => {
  const context = useContext(TestContext);
  if (!context) {
    throw new Error("useTestContext must be used within TestProvider");
  }
  return context;
};

const TestComponent = () => {
  return (
    <TestProvider>
      <div>Test Component</div>
    </TestProvider>
  );
};

export default TestComponent;