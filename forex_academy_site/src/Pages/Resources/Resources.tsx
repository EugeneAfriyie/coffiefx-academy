import React, { useState } from "react";
import { motion } from "framer-motion";
import FeaturedResource from "../../components/Resources/FeaturedResource";
import ResourceFilter from "../../components/Resources/ResourceFilter";
import ResourceGrid from "../../components/Resources/ResourceGrid";
import EXnessPromo from "../../components/Resources/EXnessPromo";



const ResourcesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const resources = [



  // ──────────────────────────────────────────────────────────────
  // 1. ANNOUNCEMENT – ACCRA ACADEMY OPENING
  // ──────────────────────────────────────────────────────────────
{
  id: 24,
  title: "BIG ANNOUNCEMENT! RoadMoney Trading Office NOW OPEN to the Public in Accra",
  category: "Announcements",
  description: "Our state-of-the-art trading office in Accra McCarthy is officially open! Visit today for expert mentorship, live trading, and exclusive resources.",
  author: "RoadMoney Team",
  date: "2025-11-01",
  image: "https://images.unsplash.com/photo-1590608897129-79da98d1590c?w=1600&h=900&fit=crop&crop=entropy",
  fullText: `
### 🚨✨ **BIG ANNOUNCEMENT!** ✨🚨  
**OUR TRADING OFFICE IS NOW OFFICIALLY OPEN TO THE PUBLIC!** 🎉🔥

![Office Grand Opening](https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1600&h=900&fit=crop&crop=entropy)

**Location:** Ghana, Accra – McCarthy Hills (Full Address Below)

---

#### The Moment You’ve Been Waiting For

After months of anticipation, **RoadMoney Forex Academy** proudly opens the doors to **Africa’s most advanced public-access trading office** — and **you’re invited!**

Whether you’re taking your **first step into forex**, scaling up your strategy, or hunting for **prop firm funding**, this is **your new home base**.

---

### What Awaits You Inside

| Feature | What You Get |
|--------|--------------|
| **Professional Trading Floor** | 20+ dual-monitor workstations, ultra-fast fiber internet, MT5/MT4 live accounts |
| **Expert Mentorship** | Daily 1-on-1 sessions with funded traders (average 5+ years live market experience) |
| **Live Market Analysis** | 9:00 AM – 5:00 PM GMT: Real-time breakdowns of EUR/USD, XAU/USD, NAS100 |
| **Prop Challenge Lab** | Free access to FTMO & MyForexFunds simulators + mentor feedback |
| **Resource Library** | Downloadable templates, risk calculators, trade journals |
| **Networking Lounge** | Weekly “Trader Meetups” – connect, collaborate, co-trade |

![Inside the Office](https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&h=900&fit=crop&crop=entropy)

---

### Who This Is For

- **Beginners**: Learn price action, risk management, and psychology from scratch  
- **Intermediate Traders**: Refine edge, build consistency, pass funding challenges  
- **Advanced Traders**: Access Level 2 data, co-working with 6-figure earners  

> “I walked in with a $100 demo. Two weeks later? I’m prepping for a $50K challenge.”  
> — **Efua A., First Public Visitor**

---

### Visit Us Today!

**Address:**  
RoadMoney House  
Plot 12, McCarthy Hills  
Accra, Ghana  
*(5 mins from West Hills Mall)*

**Opening Hours:**  
- **Mon–Fri:** 8:00 AM – 8:00 PM  
- **Sat:** 10:00 AM – 4:00 PM  
- **Sun:** Closed (Online Support Active)

**How to Get Here:**  
- **By Tro-Tro:** Alight at McCarthy Junction → 3-min walk  
- **By Uber/Bolt:** Search “RoadMoney Forex Academy”  
- **Parking:** Free secure parking on-site  

![Map Location](https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1600&h=900&fit=crop)

---

### Special Launch Perks (First 100 Visitors)

| Perk | Details |
|------|---------|
| **Free 1-Hour Mentorship** | Sit with a funded trader, review your journal |
| **$50K Challenge Voucher** | 50% off any prop firm evaluation |
| **Lifetime Resource Access** | Templates, checklists, video library |

---

### Ready to Level Up?

**Walk in. Plug in. Trade live.**  
No appointment needed — just bring your drive.

[Get Directions on Google Maps →](https://maps.google.com/?q=RoadMoney+House+McCarthy+Accra)  
[Join WhatsApp Community →](https://chat.whatsapp.com/roadmoneygh)  
[Book a Free Seat →](/mentorship)

---

**Your financial freedom doesn’t start online.**  
**It starts here — in Accra. Right now.**

See you at the desk.  
**RoadMoney Forex Academy** — *Where Ghana Trades to Win.*
  `
},

{
  id: 25,
  title: "The Power of Fundamental Analysis in Forex: Turn News Into Profits",
  category: "Tutorials",
  description: "Master NFP, CPI, FOMC, and central bank speeches. Learn how to read economic calendars, interpret data, and trade the news like a funded pro.",
  author: "Coach Ibrahim",
  date: "2025-11-01",
  image: "https://images.unsplash.com/photo-1611979074699-4f11b0a9c57e?w=1600&h=900&fit=crop&crop=entropy",
  video: "https://youtu.be/fundamental2025",
  link: "https://roadmoney.co/fundamental-kit",
  fullText: `
### The Power of Fundamental Analysis in Forex  
**Turn Global News Into Consistent Profits** 💹📈

![Economic Calendar](https://images.unsplash.com/photo-1611979074699-4f11b0a9c57e?w=1600&h=900&fit=crop&crop=entropy)

> “Price is what you pay. **Value is what you get.**”  
> — Warren Buffett (and every smart forex trader)

---

## Why Fundamentals > Technicals (Sometimes)

| Scenario | Technicals Fail | Fundamentals Win |
|--------|----------------|------------------|
| **NFP Friday** | Support broken → fakeout | 250K jobs → USD explodes 180 pips |
| **Rate Hike** | RSI overbought | Fed hikes 50bps → EUR/USD -240 pips |
| **War/Geopolitics** | Chart patterns vanish | Risk-off → JPY safe-haven surge |

**Fact:** 68% of major forex moves (>100 pips) happen within 30 minutes of high-impact news.

---

## The 4 Pillars of Fundamental Analysis

### 1. **Economic Calendar Mastery**
Use **Investing.com** or **Forex Factory** — filter by:
- **Impact**: Red only (High)
- **Currencies**: USD, EUR, GBP, JPY, AUD
- **Time**: Your session (London/NY overlap = highest volatility)

![Calendar Setup](https://images.unsplash.com/photo-1621503844873-1d58b7e5f2d2?w=1600&h=900&fit=crop)

---

### 2. **The Big 5 Reports (Trade Like a Pro)**

| Report | When | What to Watch | Typical Move |
|-------|------|---------------|--------------|
| **NFP** | 1st Friday | Actual vs Forecast | ±150 pips |
| **CPI** | Mid-month | Core vs Headline | ±80 pips |
| **FOMC** | 8x/year | Dot Plot + Powell Tone | ±200 pips |
| **Retail Sales** | Mid-month | MoM % | ±70 pips |
| **PMI** | 1st of month | >50 = growth | ±60 pips |

---

### 3. **Central Bank Speech Decoder**

| Phrase | Market Reaction |
|-------|-----------------|
| *"Patient on rates"* | Dovish → Currency down |
| *"Inflation transitory"* | Dovish |
| *"Act decisively"* | Hawkish → Currency up |
| *"Balance sheet reduction"* | Hawkish |

**Pro Tip:** Use **FOMC Word Cloud Generator** (free in our kit)

---

### 4. **The News Trading Playbook (3 Strategies)**

#### Strategy 1: **Straddle the News** (Beginner)
- 2 minutes before NFP  
- Place **Buy Stop** + **Sell Stop** 20 pips away  
- Cancel loser after 5 mins  
- **Win Rate:** 72% | **RR:** 1:2

#### Strategy 2: **Post-News Pullback** (Intermediate)
- Wait 15 mins after release  
- Enter on 1H candle close in direction of momentum  
- **Example:** CPI beats → USD up → buy GBP/USD pullback to 8 EMA

#### Strategy 3: **Deviation Trade** (Advanced)
- Actual: 250K  
- Forecast: 180K  
- **Deviation:** +70K → **Bullish USD**  
- Enter 5 mins after release on 1M close

![NFP Trade Example](https://images.unsplash.com/photo-1631603090974-97f99c44e81d?w=1600&h=900&fit=crop)

---

## Live Trade: $8,200 NFP Profit (Oct 2025)

| Detail | Value |
|------|-------|
| **Pair** | USD/JPY |
| **Entry** | 149.80 (post-NFP spike) |
| **Exit** | 151.60 |
| **Pips** | +180 |
| **Risk** | 0.5% ($500) |
| **Profit** | **$8,200** (lot size 4.0) |

> “I used to fear news. Now I trade it for breakfast.”  
> — **Ama Serwaa**, RoadMoney Student

---

## Your Fundamental Trading Kit (Free Download)

- Economic Calendar MT5 Indicator  
- News Impact Tracker (Excel)  
- FOMC Word Cloud Tool  
- 30-Day News Trade Journal  
- Central Bank Tone Cheat Sheet  

[Download Full Kit →](https://roadmoney.co/fundamental-kit)

---

## Final Words

**Technicals show *where* to enter.**  
**Fundamentals show *why* the market moves.**

Master both → become **unstoppable**.

**Next Live Session:**  
**FOMC Deep Dive – Nov 6th, 7 PM GMT**  
[RSVP Free →](/mentorship)

---

**Start trading the news today.**  
**Stop guessing. Start knowing.**

*RoadMoney Forex Academy — Where Knowledge Meets Profit.*
  `
}
,
{
  id: 26,
  title: "Prop Firm Mastery: Pass $200K Challenges & Manage 6-Figure Funded Accounts",
  category: "Tutorials",
  description: "Exact 7-phase system to pass FTMO, MyForexFunds, The5ers. Includes risk rules, drawdown recovery, payout scaling, and live $180K account breakdown.",
  author: "Coach Tolu (RoadMoney Prop Lead)",
  date: "2025-11-01",
  image: "https://images.unsplash.com/photo-1621905252472-9a35e9e6c7d0?w=1600&h=900&fit=crop&crop=entropy",
  video: "https://youtu.be/propfirm2025",
  link: "https://roadmoney.co/prop-kit",
  fullText: `
### Prop Firm Mastery: Pass $200K Challenges & Scale to $1M+  
**From Demo to 6-Figure Payouts — The Complete Playbook**  

![Funded Dashboard](https://images.unsplash.com/photo-1621905252472-9a35e9e6c7d0?w=1600&h=900&fit=crop&crop=entropy)

> “90% of traders fail prop challenges.  
> The 10% who pass? They follow **this system**.”  
> — **Coach Tolu**, 7-Figure Payout Mentor

---

## Phase 1: Choose the Right Prop Firm (2025 Tier List)

| Firm | Max Capital | Profit Split | Drawdown | Best For |
|------|-------------|--------------|----------|----------|
| **FTMO** | $2M | 90% | 10% daily / 20% total | Scalpers |
| **MyForexFunds** | $600K | 85% | 5% daily / 12% total | Swing traders |
| **The5ers** | $4M | 80% | 6% daily / 10% total | Low drawdown pros |
| **FundedNext** | $4M | 95% | 5% / 10% | High RR traders |

**RoadMoney Pick:** **FTMO** — fastest scaling + 90% split after $10K payout.

---

## Phase 2: The 1% Risk Rule (Never Break It)

| Account Size | Max Risk Per Trade | Lot Size (EUR/USD) |
|--------------|--------------------|---------------------|
| $10K         | $100               | 0.10                |
| $50K         | $500               | 0.50                |
| $100K        | $1,000             | 1.00                |
| $200K        | $2,000             | 2.00                |

**Golden Rule:**  
> **1% risk = 1% of CURRENT equity** (not initial balance)

---

## Phase 3: Pass Phase 1 & 2 (7-Day Blueprint)

### **Day 1–3: Build Consistency**
- **Goal:** 5% profit, 0 losing days  
- **Pairs:** EUR/USD, GBP/USD (London session)  
- **Setup:** 8 EMA + Order Block rejection  
- **RR:** 1:2 minimum  

### **Day 4–7: Scale & Protect**
- **Goal:** Reach 10% total  
- **Reduce lot size last 2 days**  
- **No trades 1 hour before close**  

![Phase 1 Dashboard](https://images.unsplash.com/photo-1631603090974-97f99c44e81d?w=1600&h=900&fit=crop)

---

## Phase 4: Live $180K Funded Account Breakdown

| Metric | Value |
|-------|-------|
| **Starting Balance** | $180,000 |
| **Current Equity** | $242,300 |
| **Total P&L** | **+$62,300** |
| **Win Rate** | 73% |
| **Avg RR** | 1:2.8 |
| **Max Drawdown** | 4.1% |

### Top 3 Trades
1. **XAU/USD Long** – FOMC Dovish → +$18,400  
2. **NAS100 Short** – Tech Earnings Miss → +$14,200  
3. **EUR/USD Scalp** – NFP Beat → +$9,800  

![Live P&L](https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&h=900&fit=crop)

---

## Phase 5: Drawdown Recovery Protocol

| Drawdown % | Action |
|------------|--------|
| **0–3%** | Normal trading |
| **3–5%** | Reduce risk to 0.5% |
| **5–7%** | 3-day no-trade break |
| **7%+** | Reset to demo for 14 days |

> **Never chase.**  
> One bad day = 30 good days erased.

---

## Phase 6: Scale to $1M+ (Payout Ladder)

| Payout # | Profit Split | Next Account |
|----------|--------------|--------------|
| 1        | 80%          | $200K → $400K |
| 2        | 85%          | $400K → $800K |
| 3        | 90%          | $800K → $1.6M |

**Pro Tip:** Withdraw 50%, compound 50% → **$1M in 18 months**

---

## Phase 7: Psychology & Discipline (The Real Edge)

| Habit | How to Build |
|------|--------------|
| **Trade Journal** | 5 mins after every trade |
| **Weekly Review** | Sunday 7 PM GMT |
| **Mentor Check-In** | Bi-weekly (RoadMoney Discord) |
| **No Revenge Trading** | 1 loss = walk away 1 hour |

---

## Your Prop Firm Mastery Kit (Free)

- FTMO Challenge MT5 Template  
- Risk Calculator (Excel + Google Sheets)  
- Drawdown Recovery Flowchart  
- 90-Day Trade Journal (PDF)  
- Payout Scaling Calculator  

[Download Full Kit →](https://roadmoney.co/prop-kit)

---

## Final Words

**Passing a prop challenge is a skill.**  
**Managing a funded account is a lifestyle.**

Follow this 7-phase system →  
**$10K demo → $200K funded → $1M+ payouts.**

---

**Next Live Session:**  
**FTMO Challenge Live Trading – Nov 8th, 2 PM GMT**  
[Join Free →](/mentorship)

---

**Stop applying. Start passing.**  
**RoadMoney Prop Academy — Where Traders Get Funded.**
  `
},

{
  id: 27,
  title: "MASSIVE GIVEAWAY: Win a $200K Prop Account + $1,000 Cash Bonus!",
  category: "Announcements",
  description: "Trade 1 standard lot with Exness using our link — enter to win a fully funded $200K prop account + $1,000 instant cash. Open to all RoadMoney traders!",
  author: "RoadMoney Team",
  date: "2025-10-15",
  image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1?w=1600&h=900&fit=crop&crop=entropy",
  video: "https://youtu.be/exnessgiveaway2025",
  link: "https://one.exnesslink.com/a/ttgurtgu",
  fullText: `
### MASSIVE GIVEAWAY: $200K PROP ACCOUNT + $1,000 CASH BONUS!  

![Giveaway Banner](https://images.unsplash.com/photo-1605902711622-cfb43c4437d1?w=1600&h=900&fit=crop&crop=entropy)

**RoadMoney × Exness**  
**October 15th – November 15th, 2025**  
**1 WINNER. 1 LIFE-CHANGING PRIZE.**

---

## THE PRIZE PACKAGE

| Prize | Value |
|------|-------|
| **Fully Funded $200,000 Prop Account** | $200,000 capital |
| **Instant $1,000 Cash Bonus** | $1,000 (direct to wallet) |
| **90-Day FTMO Challenge Bypass** | No evaluation needed |
| **RoadMoney Pro Mentorship (3 Months)** | 1-on-1 with 6-figure traders |
| **Custom MT5 Template Pack** | Risk tools + journal |

**Total Value: Over $205,000**

---

## HOW TO ENTER (3 SIMPLE STEPS)

### Step 1: Register with Exness  
Use **our official link** (required for tracking):  
[REGISTER NOW →](https://one.exnesslink.com/a/ttgurtgu)

### Step 2: Verify & Fund  
- Complete KYC  
- Deposit **any amount** (even $10)  
- Get **verified in 5 mins**

### Step 3: Trade 1 Standard Lot  
- Trade **1 full standard lot** (100,000 units)  
- Any pair: EUR/USD, XAU/USD, NAS100  
- Any style: Scalp, swing, news  
- **Deadline:** November 15th, 23:59 GMT

**Every 1 lot = 1 entry**  
Trade 10 lots → 10 entries → 10x chance to win!

---

## WINNER ANNOUNCEMENT

- **Live Draw:** November 18th, 7 PM GMT  
- **Streamed on:** YouTube + Instagram Live  
- **Winner Contacted:** Email + Telegram within 24 hrs  
- **Prize Delivery:** Within 7 business days

![Live Draw Setup](https://images.unsplash.com/photo-1622260875324-ec0b4b8ff59d?w=1600&h=900&fit=crop)

---

## REAL TRADER STORIES

> “I traded 3 lots on XAU/USD during NFP — won a $50K account last year. This time? I’m going for the $200K!”  
> — **Kofi Mensah**, Accra Trader

> “Exness spreads are insane. 0.0 on EUR/USD during London open. Perfect for scalping.”  
> — **Ama Serwaa**, RoadMoney Student

---

## WHY EXNESS? (THE ROADMONEY CHOICE)

| Feature | Exness | Others |
|--------|--------|--------|
| **Spreads** | 0.0 pips (EUR/USD) | 0.6–1.2 |
| **Execution** | < 25ms | 100ms+ |
| **Withdrawal** | Instant (24/7) | 1–5 days |
| **Leverage** | Up to 1:2000 | 1:500 max |
| **Trust** | 15+ years, 700K+ clients | ??? |

---

## FREQUENTLY ASKED QUESTIONS

| Question | Answer |
|--------|--------|
| **Do I need to be in Ghana?** | No — open worldwide |
| **Can I use an existing Exness account?** | No — must use **our link** |
| **What if I lose money?** | No risk — prize is fully funded |
| **Is this legit?** | 100% — powered by Exness & RoadMoney |

---

## ENTER NOW — YOUR $200K ACCOUNT AWAITS

[REGISTER & START TRADING →](https://one.exnesslink.com/a/ttgurtgu)

**Pro Tip:**  
Trade **XAU/USD** during **FOMC week** — 1 lot in 2 hours!

---

### COUNTDOWN TO CLOSE

<div style="font-size: 2rem; font-weight: bold; color: #00c896; text-align: center; margin: 2rem 0;">
  15 DAYS LEFT
</div>

---

**One trade. One winner. One future.**

**RoadMoney & Exness — Powering Africa’s Next Millionaire Trader.**

*Terms apply. Must be 18+. Full rules in link.*
  `
},

{
  id: 28,
  title: "Why RoadMoney Academy Is the #1 Choice for African Traders in 2025",
  category: "Announcements",
  description: "Live trading floor in Accra, 87% prop pass rate, 24/7 mentorship, $10M+ in funded payouts. Here's why 5,000+ traders chose us.",
  author: "RoadMoney Team",
  date: "2025-11-01",
  image: "https://images.unsplash.com/photo-1590608897129-79da98d1590c?w=1600&h=900&fit=crop&crop=entropy",
  video: "https://youtu.be/whychooseus2025",
  link: "/mentorship",
  fullText: `
### Why RoadMoney Academy Is the #1 Choice for African Traders  
**5,000+ Students | $10M+ Funded | 87% Prop Pass Rate**  

![Academy Campus](https://images.unsplash.com/photo-1590608897129-79da98d1590c?w=1600&h=900&fit=crop&crop=entropy)

> “I tried 3 online courses. Failed 5 prop challenges.  
> Joined RoadMoney — passed $100K FTMO in 21 days.”  
> — **Kofi Adjei**, Lagos Trader

---

## The RoadMoney Difference (No Fluff, Just Results)

| Feature | RoadMoney | Others |
|--------|-----------|--------|
| **Physical Campus** | ✅ Accra 24/7 Live Floor | ❌ Zoom only |
| **Prop Pass Rate** | **87%** | 12–35% |
| **Mentors** | 6-Figure Funded Traders | YouTube “Gurus” |
| **Funding Pipeline** | $10M+ Payouts | $0 |
| **Support** | 24/7 Discord + In-Person | Email (48hr reply) |

---

## 1. Africa’s Only 24/7 Live Trading Floor

- **40 x 32″ curved monitors**  
- **Level 2 data** (NYSE, JSE, Forex)  
- **Prop Challenge Arena** (FTMO, The5ers)  
- **Rooftop Strategy Sessions** with Accra skyline  

![Live Floor](https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&h=900&fit=crop)

> “It’s like Wall Street — but in Ghana.”  
> — **BBC Africa Feature, Oct 2025**

---

## 2. 87% Prop Firm Pass Rate (Industry Average: 12%)

### Our 3-Phase Funding System
| Phase | Duration | Goal | Pass Rate |
|-------|----------|------|------------|
| **1. Academy** | 30 days | 5% profit, 1% risk | 94% |
| **2. Challenge** | 14–30 days | 10% profit | 89% |
| **3. Funded** | Ongoing | Scale to $1M+ | 87% |

**$10.2M** paid out to students since 2023.

---

## 3. Mentors Who Trade Live (Not Just Teach)

| Mentor | Payouts | Specialty |
|--------|---------|----------|
| **Coach Tolu** | $2.1M | Gold Scalping |
| **Coach Aisha** | $1.8M | NAS100 Futures |
| **Coach Mike** | $3.4M | Prop Scaling |

**No theory. No slides. Just live P&L.**

![Mentor Session](https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&h=900&fit=crop)

---

## 4. Real Success Stories (Verified)

> “From Uber driver to $1.2M funded. RoadMoney changed my bloodline.”  
> — **Samuel Osei**, Featured on Forbes Africa

> “Girls-Only Bootcamp: 100 seats → 87 funded. I’m one of them.”  
> — **Efua Johnson**, $450K Account

[See All 50+ Stories →](https://roadmoney.co/stories)

---

## 5. Tools That Actually Work

| Tool | What You Get |
|------|--------------|
| **MT5 Template Pack** | 8 EMA, VWAP, Order Blocks |
| **Risk Calculator** | Auto 1% rule |
| **Trade Journal Pro** | 90-day PDF + Excel |
| **FOMC Live Room** | Real-time news trading |

[Download Free Starter Kit →](https://roadmoney.co/starter)

---

## 6. Community That Holds You Accountable

- **Discord (10K+ members)** — 24/7 trade ideas  
- **Weekly Live Reviews** — Your journal, dissected  
- **Trader Meetups** — Accra, Lagos, Nairobi  
- **Accountability Pods** — 5 traders, 1 goal  

---

## 7. Transparent Pricing (No Hidden Fees)

| Plan | Price | Includes |
|------|-------|----------|
| **Online Academy** | $99/mo | All courses, Discord |
| **Live Floor Access** | $299/mo | Campus, mentors, challenges |
| **1-on-1 Mentorship** | $999/mo | Personal coach, $50K challenge |

**First 7 Days FREE** — cancel anytime.

---

## Join the Movement

**Online courses teach you *how* to trade.**  
**RoadMoney teaches you *how to win*.**

### Next Steps:
1. [Start Free Trial →](/mentorship)  
2. Join Live Floor Tour (Accra)  
3. Get Funded in 30 Days  

![Student Celebration](https://images.unsplash.com/photo-1626378725053-7cf8fbc68f3b?w=1600&h=900&fit=crop)

---

### Still Deciding?

**Ask yourself:**  
> “In 12 months, do I want to still be demo trading…  
> or cashing out $10K+ payouts?”

**The choice is yours.**

---

**RoadMoney Academy**  
*Where African Traders Become Global Legends.*

[Enroll Now — 7-Day Free Trial →](/mentorship)
  `
},

{
  id: 29,
  title: "How Forex Is Creating a New Digital Middle Class in Africa",
  category: "Case Studies",
  description: "From youth unemployment to $10M+ funded payouts: How 1.3M African traders are building wealth via mobile forex — with real stories, stats, and economic impact.",
  author: "RoadMoney Research",
  date: "2025-11-01",
  image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop&crop=entropy",
  fullText: `
### How Forex Is Creating a New Digital Middle Class in Africa  
**1.3M Traders | $10M+ Funded | 30% YoY Growth**  

![African Trader on Mobile](https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop&crop=entropy)

> “I went from driving Uber 12 hours a day to managing a $200K funded account — all from my phone.”  
> — **Kofi Mensah**, Lagos Trader

---

## The Perfect Storm: Why Forex Fits Africa

| Factor | Reality | Impact |
|--------|--------|--------|
| **Youth Population** | 60% under 25 | Massive talent pool |
| **Unemployment** | 38% in Nigeria | Forex = flexible income |
| **Mobile Internet** | 85% access | Trade from anywhere |
| **Low Entry** | $10 deposits | No capital barrier |

**Result:** **30% annual growth** in African retail forex — fastest in the world.

---

## The Numbers Don’t Lie

| Metric | Stat |
|-------|------|
| **Active Traders** | **1.3 million** (2025) |
| **Daily Volume** | **$72 billion** (Africa-led pairs) |
| **South Africa** | 190K traders, $2.1B volume |
| **Nigeria** | 300K+ traders |
| **Prop Payouts** | **$10.2M+** to African students |

---

## Real Stories: From Hustle to Funded

### **Ref Wayne (South Africa)**  
- **Started:** Age 16, township bedroom  
- **Now:** Millionaire, founded **African Forex Institute**  
- **Impact:** Mentored 10,000+ youth  

### **Sandile Shezi (South Africa)**  
- **Risked:** University fees on GBP/ZAR  
- **Built:** $3M empire  
- **Runs:** Global Forex Institute  

### **Uche ParaGon (Nigeria)**  
- **Style:** Scalper  
- **Mentors:** 500+ via WhatsApp  
- **Portfolio:** $1M+  

### **Nelisiwe Masango (South Africa)**  
- **Focus:** Women & youth  
- **Firm:** Bear Run Investments  

![Success Stories Collage](https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&h=900&fit=crop)

---

## Economic Ripple Effect

| Impact | How It Works |
|--------|-------------|
| **GDP Boost** | $10M+ in payouts → local spending |
| **Job Creation** | Traders fund SMEs, exports |
| **Inclusion** | 46% unbanked now trade via M-Pesa |
| **AfCFTA** | Forex skills → $192B intra-trade by 2030 |

**IMF Forecast:** 4.2% growth in 2025 — **forex is a key driver**.

---

## The Dark Side (The Truth)

| Risk | Reality |
|------|--------|
| **90% Lose Money** | No discipline = account blowouts |
| **Scams** | Fake brokers, “signal sellers” |
| **Addiction** | Revenge trading destroys lives |

**Solution:**  
- **1% risk rule**  
- **Free education** (RoadMoney model)  
- **Regulated brokers** (FSCA, CMA)

---

## The Future: $50M Africa Trader Fund?

| Vision | Plan |
|-------|------|
| **Lagos Bootcamp** | 87% prop pass rate |
| **Nairobi Campus** | AI trading labs |
| **$50M Fund** | Zero fees, 90% split |

**By 2030:** 5M African funded traders.

---

## Your Move

**Forex isn’t a job.**  
**It’s a skill — and Africa is mastering it.**

### Start Today:
1. [Download Free Starter Kit →](https://roadmoney.co/starter)  
2. Join WhatsApp Trading Community  
3. Demo $10K → Fund $200K  

![Mobile Trading](https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&h=900&fit=crop)

---

**The digital middle class isn’t coming.**  
**It’s already here — and it trades forex.**

**RoadMoney Academy**  
*Powering Africa’s Next Generation of Wealth Creators.*
  `
},

{
  id: 30,
  title: "The Psychology of a Consistent Trader: Master Your Mind, Master the Market",
  category: "Tutorials",
  description: "78% of losses are emotional. Learn the 7 mental models used by 6-figure funded traders: fear, greed, revenge, FOMO, discipline, journaling, and burnout recovery.",
  author: "Coach Aisha (RoadMoney Mindset Lead)",
  date: "2025-11-01",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&h=900&fit=crop&crop=entropy",
  video: "https://youtu.be/traderpsych2025",
  link: "https://roadmoney.co/mindset-kit",
  fullText: `
### The Psychology of a Consistent Trader  
**78% of Losses Are Emotional — Here’s How to Fix It**  

![Trader in Deep Focus](https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&h=900&fit=crop&crop=entropy)

> “The market doesn’t beat you.  
> **Your mind does.**”  
> — **Coach Aisha**, $1.8M Funded Trader

---

## The 4 Emotions That Destroy Accounts

| Emotion | Symptom | Fix |
|--------|--------|-----|
| **Fear** | Hesitating on valid setups | Pre-define entries (no thinking) |
| **Greed** | Over-sizing after wins | Fixed 1% risk rule |
| **Revenge** | Doubling lots after loss | 1-hour “cool-off” rule |
| **FOMO** | Chasing late entries | Wait for 1H candle close |

**Stat:** 9/10 blown accounts = **emotional spiral**, not bad strategy.

---

## The 7 Mental Models of 6-Figure Traders

### 1. **The Process > Outcome Mindset**
- Focus: **Execution score** (did I follow plan?)  
- Not: P&L  
- **Daily Goal:** 8/10 execution → consistency compounds

### 2. **The 1% Risk Religion**
| Account | Max Risk | Lot Size (EUR/USD) |
|---------|----------|---------------------|
| $10K    | $100     | 0.10                |
| $50K    | $500     | 0.50                |
| $200K   | $2,000   | 2.00                |

> **Break it once → reset to demo.**

---

### 3. **The Post-Trade Ritual (5 Mins After Close)**

1. **Screenshot chart**  
2. **Grade setup (A/B/C)**  
3. **Write 1-sentence lesson**  
4. **Close platform**  

![Journal Example](https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&h=900&fit=crop)

---

### 4. **The 3-Day Rule (After a Loss)**
- **Day 1:** No trading — walk, gym, sleep  
- **Day 2:** Demo only — rebuild confidence  
- **Day 3:** Live with 0.5% risk  

**Result:** 94% of traders avoid revenge spiral.

---

### 5. **The Weekly Review (Sunday 7 PM GMT)**

| Review | Questions |
|--------|----------|
| **Win Rate** | >65%? |
| **Avg RR** | >1:2? |
| **Max Drawdown** | <5%? |
| **Emotional Score** | 1–10? |

**Fix 1 weakness per week.**

---

### 6. **The Burnout Radar (Self-Check)**

| Sign | Action |
|------|--------|
| Staring at charts 8+ hrs | Mandatory 2-day break |
| Heart racing on 1R trade | Reduce lot size 50% |
| Dreaming of P&L | Journal + meditate |

**Pro Tool:** RoadMoney Burnout Tracker (in kit)

---

### 7. **The Accountability Pod**

- **5 traders**  
- **Daily check-in** (WhatsApp)  
- **Weekly P&L share**  
- **Call out FOMO live**  

**Result:** 3.2x higher consistency.

---

## Live Case Study: From $7K Blowout to $180K Funded

| Phase | Mindset Shift | Result |
|------|---------------|--------|
| **Month 1** | Revenge trading | -$7,000 |
| **Month 2** | 1% rule + journal | +$2,100 |
| **Month 3** | 3-day rule | Passed FTMO |
| **Month 6** | Pod accountability | **$180K funded** |

> “I stopped fighting the market.  
> I started fighting my impulses.”  
> — **Samuel Osei**

![P&L Recovery](https://images.unsplash.com/photo-1560472355-0367f8cc7d04?w=1600&h=900&fit=crop)

---

## Your Psychology Mastery Kit (Free)

- **90-Day Trade Journal (PDF + Notion)**  
- **Emotional Trigger Checklist**  
- **1% Risk Calculator (Excel)**  
- **Burnout Recovery Guide**  
- **Accountability Pod Template**  

[Download Full Kit →](https://roadmoney.co/mindset-kit)

---

## Final Words

**Strategy gets you in the game.**  
**Psychology keeps you in the game.**

Master your mind →  
**$10K demo → $200K funded → $1M+ payouts.**

---

**Next Live Session:**  
**Psychology of NFP Trading – Nov 7th, 7 PM GMT**  
[RSVP Free →](/mentorship)

---

**Trade the plan. Not the emotion.**

**RoadMoney Mindset Academy**  
*Where Discipline Meets Profit.*
  `
},
{
  id: 31,
  title: "Welcome to RoadMoney Forex Academy – Your Journey to Financial Freedom Starts Here!",
  category: "Announcements",
  description: "Join 5,000+ African traders mastering Forex with live mentorship, 87% prop pass rate, and real funded results. Standard, Intense, or Premium — pick your path to profit.",
  author: "RoadMoney Team",
  date: "2025-11-01",
  image: "https://images.unsplash.com/photo-1590608897129-79da98d1590c?w=1600&h=900&fit=crop&crop=entropy",
  video: "https://youtu.be/welcome2025",
  link: "/mentorship",
  fullText: `
### 🌍 **Welcome to RoadMoney Forex Academy** 🚀  
**Your Journey to Financial Freedom Starts Here!**

![Academy Welcome Banner](https://images.unsplash.com/photo-1590608897129-79da98d1590c?w=1600&h=900&fit=crop&crop=entropy)

> **We don’t just teach Forex.**  
> **We build profitable traders.** 💪

---

## Our Mission  
To **equip you** with the **skills, mindset, and strategies** to **win consistently** in the financial markets — **no fluff, no hype, just results.**

---

## Choose Your Mentorship Path

| Plan | Best For | What You Get |
|------|----------|--------------|
| **Standard Mentorship** ✅ | Beginners | • 30-Day Foundation Course<br>• Weekly Group Coaching<br>• MT5 Template Pack<br>• Discord Access |
| **Intense Mentorship** 🔥 | Intermediate | • 60-Day Strategy Deep Dive<br>• Daily Trade Reviews<br>• Prop Challenge Prep<br>• 1-on-1 Mentor Check-Ins |
| **Premium Mentorship** 💎 | Advanced | • **1-on-1 Live Trading Sessions**<br>• $50K Challenge Bypass<br>• Personal Risk Plan<br>• Lifetime Floor Access (Accra) |

---

## Why 5,000+ Traders Chose RoadMoney

| Proof | Result |
|-------|--------|
| **87% Prop Pass Rate** | Industry average: 12% |
| **$10.2M+ Funded Payouts** | Real money, real accounts |
| **24/7 Live Trading Floor** | Accra – “The Nasdaq of West Africa” |
| **Community** | 10K+ on Discord, WhatsApp, X |

![Live Trading Floor](https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&h=900&fit=crop)

---

## Real Traders, Real Wins

> “Started with $100 demo.  
> Now managing **$180K funded** — all thanks to Premium Mentorship.”  
> — **Samuel Osei**, Nigeria

> “Standard plan got me my **first $10K payout** in 45 days.”  
> — **Efua Johnson**, Ghana

[See All Success Stories →](https://roadmoney.co/stories)

---

## Join the Movement

**We trade smart.**  
**We grow strong.**  
**We win together.** 💹

### Next Steps:
1. [Pick Your Plan →](/mentorship)  
2. Start Your **7-Day Free Trial**  
3. Join Live Welcome Session (Every Monday, 7 PM GMT)

---

## Let’s Stay Connected

📍 **Visit Us:** RoadMoney House, McCarthy Hills, Accra  
📞 **Call/WhatsApp:** +233 123 456 789  
🌐 **Follow:** [@RoadMoneyForexAcademy](https://instagram.com/roadmoneyforexacademy) on **X, Instagram, YouTube**

---

### **Your First Profit Is Closer Than You Think**

> **One strategy. One community. One future.**

---

**#RoadMoneyForexAcademy**  
**#ForexTrading #FinancialFreedom #TradingCommunity #LearnAndEarn**

[Enroll Now – 7 Days Free →](/mentorship)
  `
}
,{
  id: 32,
  title: "Join RoadMoney's Socials: TikTok for Daily Insights & Lives, Telegram for Signals + Education",
  category: "Announcements",
  description: "Connect with 10K+ traders! Follow @roadmoneyforex on TikTok for quick tips, live sessions & mindset hacks. Join our Telegram channel for real-time signals, daily education & community support.",
  author: "RoadMoney Team",
  date: "2025-11-01",
  image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop&crop=entropy",
  video: "https://youtu.be/socials2025",
  link: "https://t.me/roadmoneyforexacademy",
  fullText: `
### 🌐 **Join Our Socials: Unlock Daily Insights, Live Sessions, Signals & Education** 🚀

![Social Media Collage](https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop&crop=entropy)

> **Knowledge shared is profit earned.**  
> Join 10K+ traders leveling up daily — **no gatekeeping, just gains.** 💹

---

## Why Join Our Socials? (The RoadMoney Edge)

| Platform | What You Get | Why It Matters |
|----------|--------------|----------------|
| **TikTok** | Daily tips, live Q&A, mindset hacks | **Quick, visual learning** — 60-sec strategies that stick |
| **Telegram** | Real-time signals, education threads, community chat | **Actionable now** — trade alerts + breakdowns during London/NY opens |
| **X (Twitter)** | Market updates, trader stories, polls | **Stay ahead** — instant reactions to FOMC, NFP & crypto swings |

**Result:** From demo to $200K funded — our community has done it 5K+ times.

---

## TikTok: Your Daily Dose of Forex Fire 🔥

**@roadmoneyforex** (1.2M+ views)  
- **Daily Lives:** 7 PM GMT — live chart breakdowns, Q&A  
- **Insights:** Scalping setups, psychology tips, prop challenge hacks  
- **Education:** 60-sec "Why This Trade Wins" series  

> “TikTok got me my first 50-pip day. Now? $10K monthly payouts.”  
> — **Ama Serwaa**, Follower → Funded Trader

[Follow on TikTok →](https://www.tiktok.com/@roadmoneyforex)

![TikTok Live Screenshot](https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1600&h=900&fit=crop)

---

## Telegram: Signals, Education & Trader Vibes 📱

**t.me/roadmoneyforexacademy** (8K+ members)  
- **Signals:** 5–10 daily (EUR/USD, XAU, NAS100) with entry/SL/TP  
- **Education:** Weekly deep dives (FOMC prep, risk rules)  
- **Community:** 24/7 chat — share journals, get feedback  

**Pro Perk:** VIP Channel (free for Standard Members) — 80%+ win rate alerts  

> “One signal last week? +$2,800 on GBP/JPY. Telegram is my edge.”  
> — **Kofi Boateng**, Active Member

[Join Telegram Now →](https://t.me/roadmoneyforexacademy)

---

## X: Real-Time Pulse of the Markets 🐦

**@TheRoadMoney** (Follow for alpha)  
- **Updates:** Breaking news, sentiment shifts  
- **Stories:** Trader spotlights, giveaway alerts  
- **Engage:** Reply for shoutouts, polls for next lesson  

[Follow on X →](https://x.com/TheRoadMoney)

---

## Quick Start Guide (3 Steps to Join the Movement)

1. **TikTok:** Search @roadmoneyforex → Turn on notifications for lives  
2. **Telegram:** Click link → Say "New Trader" in chat for welcome pack  
3. **X:** Follow @TheRoadMoney → DM for free signal template  

**Bonus:** First 100 joins this week get **exclusive $50K prop voucher**!

---

## Don't Miss Out — Your Edge Awaits

**Socials aren't optional.**  
**They're your 24/7 mentor.**

[Start with TikTok →](https://www.tiktok.com/@roadmoneyforex)  
[Jump into Telegram →](https://t.me/roadmoneyforexacademy)  
[Follow on X →](https://x.com/TheRoadMoney)

---

**Trade smarter. Learn daily. Win together.**  

**RoadMoney Socials**  
*#RoadMoneyForexAcademy #ForexSignals #TradingEducation #TikTokTrading #TelegramTips*
  `
}

  







  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19] text-white font-montserrat">
      {/* Hero */}
      <section className="relative py-24 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-[#00c896] mb-4">
            Resources & Learning Hub
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
            Explore in-depth articles, trading guides, webinar replays and announcements crafted to elevate your trading journey.
          </p>
        </motion.div>

        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(0,200,150,0.05),transparent_70%)] -z-10" />
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <FeaturedResource />
        <EXnessPromo />

        <ResourceFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <ResourceGrid
          resources={resources}
          selectedCategory={selectedCategory}
        />
      </div>
    </main>
  );
};

export default ResourcesPage;
