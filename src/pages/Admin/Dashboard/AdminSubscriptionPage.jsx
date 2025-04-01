const AdminSubscriptionPage = () => {
  const plans = [
    {
      name: "Basic Plan (Free) - For Beginners",
      price: "$0",
      description: "Casual traders and beginners exploring ThinkScript.",
      features: [
        "Limited saved scans (Up to 5)",
        "Basic alerts Price, volume, moving averages",
        "Access to public ThinkScript studies",
        "Community forum access",
        "Only one set of 5 studies",
        "Delayed alerts upto 24 hrs",
      ],
    },
    {
      name: "Pro Plan - For Active Traders",
      price: "$19",
      description: "Traders who want deeper market insights and more automation.",
      features: [
        "Unlimited saved scans",
        "5mins alert delay",
        "Priority access to new ThinkScript studies",
        "Customizable dashboard for tracking multiple indicators",
        "2 sets of Studies",
      ],
    },
    {
      name: "Enterprise Plan - For Professionals",
      price: "$49",
      description: "Professional traders and firms needing top-tier customization.",
      features: [
        "All Pro features +",
        "API access for custom ThinkScript integrations",
        "Automated strategy execution",
        "Exclusive indicators and premium ThinkScript studies",
        "4 sets of Studies",
        "5mins alert delay",
      ],
    },
  ];

  return (
    <div className="flex-1 overflow-x-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">SUBSCRIPTION & BILLING</h2>
        <p className="text-gray-600">We offer flexible subscription plans tailored to meet the needs of traders at every level. Whether you're a beginner exploring ThinkScript or a professional seeking advanced market data and automation, our plans ensure you get the best tools at the right price.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-2xl font-bold mb-4 text-[#049F30]">{plan.price} <span className="text-base font-normal">/month</span></p>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <ul className="list-disc list-inside mb-6">
                {plan.features.map((feature, i) => (<li key={i} className="text-sm text-gray-600">{feature}</li>))}
              </ul>
            </div>
            <button className="bg-[#049F30] text-white py-2 px-4 rounded self-center w-[100%]">CHOOSE PLAN</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminSubscriptionPage;