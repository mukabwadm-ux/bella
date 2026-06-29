import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Booking Terms & Conditions",
  description:
    "Bella Safaris booking terms and conditions — deposits, cancellation policy, liability, and general booking conditions.",
};

const terms = [
  {
    n: 1,
    text: "A non-refundable deposit will be collected to process your inquiry. This amount will depend on the total value of your package, date of travel and type of holiday. This deposit will be adjusted towards the cost of your holiday booking.",
  },
  {
    n: 2,
    text: "All prices quoted are subject to change without prior notice. Hotels and other suppliers reserve the right to amend the price, a service/package, if affected by circumstances beyond their control. The prices could also change in the event there is a major fluctuation in rates of exchange or airfares or both. Any increase in price would have to be paid before departure. However such increase will not normally apply after a booking is confirmed and payment is received.",
  },
  {
    n: 3,
    text: "Every effort will be made to confirm a booking exactly as requested. However, in case of non-availability, similar alternatives will be offered.",
  },
  {
    n: 4,
    text: "Full payment is to be made three weeks before departure to enable us reconfirm all arrangements with our suppliers. Certain services like Cruises, Apartment stays, Coach Tours, Unique Specialty Packages etc., may call for a different payment schedule and will possibly necessitate earlier full pre-payment.",
  },
  {
    n: 5,
    cancellation: true,
    text: "Subsequent alterations, amendments or cancellations to a confirmed booking may attract penalties. Please note that some properties may charge higher cancellation fees particularly during peak season where cancellation fees can be up to 100%. The following standard cancellation policy will apply:",
  },
  {
    n: 6,
    text: "Service and handling fees may be applied on an individual case basis, even if a booking is cancelled within the acceptable period and no cancellation charges are entailed.",
  },
  {
    n: 7,
    bold: "Bella Safaris",
    text: "reserves the right to cancel or change any holiday or service without notice at any time. We will offer alternative arrangements, if deemed necessary or advisable. If alternative arrangements are not available or are unacceptable to you, we will refund the part of any money, which relates to the part of service that has been cancelled. In either case Bella Safaris shall not be held liable for any damage, additional expense or consequential loss suffered.",
  },
  {
    n: 8,
    bold: "Bella Safaris",
    text: "shall in no circumstances be liable for:",
    bullets: [
      "Death, personal injury, sickness, accident, loss, delay, increased expense, consequential loss or any misadventure whatsoever caused.",
      "Any act, omission, default of any hotelier, carrier or other person or by any servant or agent employed by them who may be engaged or concerned in the provision of accommodation, food and beverage, carriage, facility, or service for you or for any person travelling with you howsoever caused.",
      "The temporary or permanent loss of or damage to baggage or personal effects howsoever caused.",
    ],
  },
  {
    n: 9,
    bold: "Bella Safaris",
    text: "acts on behalf of Hotels, Suppliers, Operators, and Handling Agents and hence has limited liabilities only, in terms of the arrangements directly under its control. In the event of disputes over all other circumstances, we will offer all reasonable assistance but will not be responsible for claims and compensations. All complaints should be submitted within 10 days of your return.",
  },
  {
    n: 10,
    bold: "Bella Safaris",
    text: `shall not be responsible or deemed to be in default on account of any delays or interruptions in the performance of its obligations due to causes beyond its reasonable control or not occasioned by its fault or negligence including acts of God or the Public enemy, war, civil war, warlike operations, terrorism, insurrections or riots, fires, floods (usually severe weather conditions), epidemics, or quarantine, restrictions, any act of government, strikes, or labour unrest causing cessation, slow down or interruption of work (collectively "the Force Majeure events"). Although we will extend all assistance wherever possible, the obtaining of visas, health requirements and vaccinations etc. will be the sole responsibility of the passenger. It is the responsibility of the passenger to be in possession of a valid passport, ensure the visas can be obtained before entering into a booking commitment with Bella Safaris. Multiple entry visas are recommended.`,
  },
  {
    n: 11,
    bold: "Bella Safaris",
    text: "obtaining a refund from the hotels and suppliers. An administrative fee could apply as part of the refund process. Partially utilized services are non-refundable.",
    refundPrefix: "Refunds if any are subject to ",
  },
  {
    n: 12,
    bold: "Bella Safaris",
    text: "strongly recommends purchase of multi-cover Holiday Insurance to cover unforeseen eventualities. It is the client's responsibility to have adequate travel insurance at the time of travel.",
  },
  {
    n: 13,
    text: "These terms and conditions and any agreement referring to these terms and conditions shall be construed, interpreted and governed in accordance with the laws of the Government of Kenya.",
  },
  {
    n: 14,
    text: "All persons travelling together will be deemed to have understood and compliant with all these booking conditions.",
  },
];

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-safari-green py-16 md:py-20">
        <div className="container-xl text-center">
          <span className="inline-block text-savanna-gold text-xs font-semibold uppercase tracking-widest mb-3">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Booking Terms &amp; Conditions
          </h1>
          <p className="text-white/70 text-base max-w-xl mx-auto">
            Please read these conditions carefully. By making a booking with Bella Safaris you confirm that you have read, understood, and agreed to the following terms.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-pad bg-sand">
        <div className="container-xl max-w-4xl">

          {/* Cancellation table — pulled out for prominence */}
          <div className="bg-gold-tint border border-savanna-gold/30 rounded-2xl p-6 mb-10">
            <h2 className="text-sm font-bold uppercase tracking-widest text-savanna-gold mb-4">
              Standard Cancellation Policy
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-savanna-gold/20">
                    <th className="text-left font-semibold text-safari-green py-2 pr-8">
                      Period before notification of cancellation is received
                    </th>
                    <th className="text-left font-semibold text-safari-green py-2">
                      Charges
                    </th>
                  </tr>
                </thead>
                <tbody className="text-body-text">
                  <tr className="border-b border-savanna-gold/10">
                    <td className="py-2.5 pr-8">30 Days – 15 Days</td>
                    <td className="py-2.5 font-semibold text-safari-green">50%</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-8">14 Days – No Show</td>
                    <td className="py-2.5 font-semibold text-red-600">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Terms list */}
          <ol className="space-y-6">
            {terms.map((term) => (
              <li key={term.n} className="flex gap-5">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-safari-green text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  {term.n}
                </span>
                <div className="flex-1 text-body-text leading-relaxed text-sm md:text-base">
                  {term.n === 11 ? (
                    <p>
                      {term.refundPrefix}
                      <strong className="text-safari-green">Bella Safaris</strong>{" "}
                      obtaining a refund from the hotels and suppliers. An administrative fee could apply as part of the refund process. Partially utilized services are non-refundable.
                    </p>
                  ) : term.bold ? (
                    <p>
                      <strong className="text-safari-green">{term.bold}</strong>{" "}
                      {term.text}
                    </p>
                  ) : (
                    <p>{term.text}</p>
                  )}
                  {term.bullets && (
                    <ul className="mt-3 space-y-2 pl-4">
                      {term.bullets.map((b, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-savanna-gold mt-1.5 flex-shrink-0">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>

          {/* Footer note */}
          <div className="mt-12 pt-8 border-t border-border text-center">
            <p className="text-muted-text text-sm">
              Questions about these terms?{" "}
              <Link href="/contact" className="text-safari-green font-semibold hover:underline">
                Contact us
              </Link>{" "}
              and we will be happy to clarify.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
