import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      description: "For creators trying things out.",
      price: "₹0",
      period: "forever",
      buttonText: "Start free",
      buttonVariant: "dark",
      features: [
        "50 AI generations / month",
        "Basic trend dashboard",
        "3 platforms",
        "Markdown & text export"
      ]
    },
    {
      name: "Pro",
      description: "For serious tech creators.",
      price: "₹999",
      period: "/ month",
      buttonText: "Start 7-day trial",
      buttonVariant: "lime",
      popular: true,
      features: [
        "Unlimited AI generations",
        "Premium real-time trends",
        "All platforms + repurposing",
        "Trend alerts & AI research",
        "Content folders & history"
      ]
    },
    {
      name: "Agency",
      description: "For teams and agencies.",
      price: "₹1,999",
      period: "/ month",
      buttonText: "Talk to us",
      buttonVariant: "dark",
      features: [
        "Everything in Pro",
        "Team workspace & roles",
        "Approval workflow",
        "Multi-brand management",
        "Priority support"
      ]
    }
  ];

  return (
    <div className="bg-black py-24" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-lime-400 text-xs font-mono font-bold tracking-widest uppercase mb-3 block">Pricing</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Simple plans. Built to scale with you.
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Start free. Upgrade when your content engine takes off.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-zinc-900/50 border rounded-2xl p-8 flex flex-col relative ${
                plan.popular ? 'border-lime-500 shadow-[0_0_30px_rgba(163,230,53,0.1)]' : 'border-zinc-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-lime-400 text-black text-xs font-mono font-bold px-3 py-1 rounded-full uppercase">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-white font-semibold text-xl mb-1">{plan.name}</h3>
                <p className="text-zinc-500 text-sm">{plan.description}</p>
              </div>

              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-white text-4xl font-bold">{plan.price}</span>
                <span className="text-zinc-500 text-sm">{plan.period}</span>
              </div>

              <button 
                className={`w-full py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-colors mb-8 ${
                  plan.buttonVariant === 'lime' 
                    ? 'bg-lime-400 hover:bg-lime-500 text-black' 
                    : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                }`}
              >
                {plan.buttonText} <ArrowRight className="w-4 h-4" />
              </button>

              <ul className="space-y-4 mt-auto">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-lime-500 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-400 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
