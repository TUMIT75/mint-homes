import React, { useState } from 'react';
import { 
  X, 
  Calculator, 
  DollarSign, 
  Percent, 
  Calendar, 
  ShieldCheck, 
  PieChart, 
  ArrowRight 
} from 'lucide-react';

interface MortgageCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const MortgageCalculatorModal: React.FC<MortgageCalculatorModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation
}) => {
  if (!isOpen) return null;

  const [homePrice, setHomePrice] = useState(850000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTermYears, setLoanTermYears] = useState(30);
  const [annualTaxes, setAnnualTaxes] = useState(13500);
  const [annualInsurance, setAnnualInsurance] = useState(1800);

  const downPaymentDollars = Math.round((homePrice * downPaymentPercent) / 100);
  const loanPrincipal = homePrice - downPaymentDollars;

  const monthlyRate = interestRate / 100 / 12;
  const totalPayments = loanTermYears * 12;

  const monthlyPrincipalInterest = monthlyRate > 0
    ? Math.round(
        (loanPrincipal * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
          (Math.pow(1 + monthlyRate, totalPayments) - 1)
      )
    : Math.round(loanPrincipal / totalPayments);

  const monthlyTaxes = Math.round(annualTaxes / 12);
  const monthlyInsurance = Math.round(annualInsurance / 12);
  const totalMonthlyPayment = monthlyPrincipalInterest + monthlyTaxes + monthlyInsurance;

  // Percentage shares for visual breakdown
  const piShare = Math.round((monthlyPrincipalInterest / totalMonthlyPayment) * 100);
  const taxShare = Math.round((monthlyTaxes / totalMonthlyPayment) * 100);
  const insShare = 100 - piShare - taxShare;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl border border-slate-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-slate-950 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-4 h-4" />
            <span>Interactive Financial Tool</span>
          </div>

          <h3 className="font-display text-2xl font-bold text-white tracking-tight">
            Long Island Mortgage Calculator
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Estimate your monthly principal, interest, Nassau and Suffolk property taxes, and homeowners insurance.
          </p>
        </div>

        {/* Calculator Body */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Controls Column */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1 text-xs font-semibold text-slate-700">
                <span>Home Purchase Price</span>
                <span className="font-display text-sm font-bold text-slate-950">
                  ${homePrice.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="350000"
                max="3000000"
                step="25000"
                value={homePrice}
                onChange={(e) => setHomePrice(Number(e.target.value))}
                className="w-full accent-amber-600 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>$350k</span>
                <span>$1.5M</span>
                <span>$3M+</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1 text-xs font-semibold text-slate-700">
                <span>Down Payment ({downPaymentPercent}%)</span>
                <span className="font-bold text-slate-900">
                  ${downPaymentDollars.toLocaleString()}
                </span>
              </div>
              <div className="flex gap-2">
                {[10, 15, 20, 25, 30].map((pct) => (
                  <button
                    key={pct}
                    type="button"
                    onClick={() => setDownPaymentPercent(pct)}
                    className={`flex-1 py-1.5 rounded text-xs font-medium border transition-colors cursor-pointer ${
                      downPaymentPercent === pct
                        ? 'bg-amber-600 text-white border-amber-600'
                        : 'bg-stone-50 text-slate-700 border-slate-200 hover:bg-stone-100'
                    }`}
                  >
                    {pct}%
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Interest Rate (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  min="3.0"
                  max="12.0"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-amber-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Loan Term
                </label>
                <select
                  value={loanTermYears}
                  onChange={(e) => setLoanTermYears(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 bg-white focus:outline-none focus:border-amber-600"
                >
                  <option value={30}>30 Years Fixed</option>
                  <option value={20}>20 Years Fixed</option>
                  <option value={15}>15 Years Fixed</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Est. Annual Taxes ($)
                </label>
                <input
                  type="number"
                  step="500"
                  value={annualTaxes}
                  onChange={(e) => setAnnualTaxes(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-amber-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Est. Home Insurance ($)
                </label>
                <input
                  type="number"
                  step="100"
                  value={annualInsurance}
                  onChange={(e) => setAnnualInsurance(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-amber-600"
                />
              </div>
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="bg-stone-50 rounded-xl p-5 border border-slate-200 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase font-semibold text-slate-500 tracking-wider block mb-1">
                Estimated Monthly Obligation
              </span>
              <div className="font-display text-4xl font-bold text-slate-950 mb-3">
                ${totalMonthlyPayment.toLocaleString()}
                <span className="text-xs font-sans text-slate-500 font-normal"> / month</span>
              </div>

              {/* Progress Distribution Bar */}
              <div className="h-3 rounded-full overflow-hidden flex bg-slate-200 mb-4">
                <div style={{ width: `${piShare}%` }} className="bg-slate-900" title={`Principal & Interest: ${piShare}%`} />
                <div style={{ width: `${taxShare}%` }} className="bg-amber-600" title={`Property Taxes: ${taxShare}%`} />
                <div style={{ width: `${insShare}%` }} className="bg-emerald-600" title={`Insurance: ${insShare}%`} />
              </div>

              {/* Cost Breakdown Items */}
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between py-1 border-b border-slate-200">
                  <span className="flex items-center gap-2 text-slate-700">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-900" />
                    <span>Principal and Interest</span>
                  </span>
                  <span className="font-bold text-slate-950">${monthlyPrincipalInterest.toLocaleString()}/mo</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-slate-200">
                  <span className="flex items-center gap-2 text-slate-700">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
                    <span>Nassau / Suffolk Property Taxes</span>
                  </span>
                  <span className="font-bold text-slate-950">${monthlyTaxes.toLocaleString()}/mo</span>
                </div>

                <div className="flex items-center justify-between py-1">
                  <span className="flex items-center gap-2 text-slate-700">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                    <span>Homeowners Insurance</span>
                  </span>
                  <span className="font-bold text-slate-950">${monthlyInsurance.toLocaleString()}/mo</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-white rounded-lg border border-slate-200 text-[11px] text-slate-500">
                Loan Amount: <strong>${loanPrincipal.toLocaleString()}</strong> over {loanTermYears} years at {interestRate}% fixed APR.
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 mt-4">
              <button
                onClick={() => {
                  onClose();
                  onOpenConsultation();
                }}
                className="w-full bg-amber-600 hover:bg-amber-500 text-white font-semibold py-2.5 px-4 rounded-lg text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Get Pre-Approved for This Amount</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
