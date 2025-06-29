import React, { useState, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Calculator } from 'lucide-react';

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(10);
  const [tenure, setTenure] = useState(5);

  const calculateEMI = useMemo(() => {
    const principal = loanAmount;
    const rate = interestRate / 100 / 12;
    const time = tenure * 12;
    
    if (rate === 0) {
      return {
        emi: principal / time,
        totalAmount: principal,
        totalInterest: 0
      };
    }
    
    const emi = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
    const totalAmount = emi * time;
    const totalInterest = totalAmount - principal;
    
    return {
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest)
    };
  }, [loanAmount, interestRate, tenure]);

  const chartData = [
    { name: 'Principal', value: loanAmount, color: '#f26522' },
    { name: 'Interest', value: calculateEMI.totalInterest, color: '#ff8c42' }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Calculator Inputs */}
        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-center space-x-2 mb-4 sm:mb-6">
            <Calculator className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500" />
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">Calculate Your EMI</h3>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Loan Amount (₹)
            </label>
            <input
              type="number"
              min="100000"
              max="5000000"
              step="50000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-base sm:text-lg font-semibold"
              placeholder="Enter loan amount"
            />
            <div className="flex justify-between text-xs sm:text-sm text-gray-600 mt-1">
              <span>Min: ₹1,00,000</span>
              <span>Max: ₹50,00,000</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Interest Rate (% per annum)
            </label>
            <input
              type="number"
              min="5"
              max="20"
              step="0.5"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-base sm:text-lg font-semibold"
              placeholder="Enter interest rate"
            />
            <div className="flex justify-between text-xs sm:text-sm text-gray-600 mt-1">
              <span>Min: 5%</span>
              <span>Max: 20%</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Loan Tenure (Years)
            </label>
            <input
              type="number"
              min="1"
              max="10"
              step="1"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-base sm:text-lg font-semibold"
              placeholder="Enter tenure in years"
            />
            <div className="flex justify-between text-xs sm:text-sm text-gray-600 mt-1">
              <span>Min: 1 Year</span>
              <span>Max: 10 Years</span>
            </div>
          </div>
        </div>

        {/* Results and Chart */}
        <div className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600">Monthly EMI</div>
              <div className="text-xl sm:text-2xl font-bold text-orange-600">{formatCurrency(calculateEMI.emi)}</div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600">Total Amount</div>
                <div className="text-base sm:text-lg font-semibold text-gray-900">{formatCurrency(calculateEMI.totalAmount)}</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600">Total Interest</div>
                <div className="text-base sm:text-lg font-semibold text-gray-900">{formatCurrency(calculateEMI.totalInterest)}</div>
              </div>
            </div>
          </div>

          {/* Pie Chart */}
          <div className="h-48 sm:h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;