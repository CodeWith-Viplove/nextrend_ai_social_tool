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
    <div className="bg-zinc-50/20 py-24 border-y border-zinc-200/50 select-none" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#ef4444] text-[10px] font-bold tracking-widest uppercase mb-3 block">Pricing</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 mb-4">
            Simple plans. Built to scale with you.
          </h2>
          <p className="text-zinc-500 text-base max-w-2xl mx-auto font-medium">
            Start free. Upgrade when your content engine takes off.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white border rounded-2xl p-8 flex flex-col relative transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-md ${
                plan.popular ? 'border-2 border-[#ef4444] shadow-[0_8px_30px_rgba(239,68,68,0.08)] hover:scale-[1.002]' : 'border-zinc-200/80 hover:border-zinc-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#ef4444] text-white text-[9px] font-bold font-mono px-3.5 py-1 rounded-full uppercase tracking-wider shadow">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-zinc-950 font-bold text-xl mb-1">{plan.name}</h3>
                <p className="text-zinc-400 text-sm font-semibold">{plan.description}</p>
              </div>

              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-zinc-950 text-4xl font-black font-mono">{plan.price}</span>
                <span className="text-zinc-400 text-sm font-semibold">{plan.period}</span>
              </div>

              <a 
                href="/dashboard"
                className={`w-full py-3.5 rounded-full font-bold flex items-center justify-center gap-2 transition-all mb-8 text-sm cursor-pointer ${
                  plan.buttonVariant === 'lime' 
                    ? 'bg-[#ef4444] hover:bg-[#e03552] text-white shadow-md shadow-red-100' 
                    : 'bg-zinc-50 border border-zinc-200 hover:border-zinc-300 text-zinc-700'
                }`}
              >
                {plan.buttonText} <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <ul className="space-y-4 mt-auto">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5 stroke-[3]" />
                    <span className="text-zinc-600 text-sm font-semibold">{feature}</span>
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
