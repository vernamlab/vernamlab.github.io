---
title: "Goblin: Time is money, friend! Timing Side-channel Attack against Garbled Circuit Constructions"
paper_url: "https://eprint.iacr.org/2023/001.pdf"
year: 2024
---

![Goblin paper image](/img/papers/goblin.png)

With the advent of secure function evaluation (SFE), distrustful parties can jointly compute on their private inputs without disclosing anything besides the results. Yao's garbled circuit protocol has become an integral part of secure computation thanks to considerable efforts made to make it feasible, practical, and more efficient. For decades, the security of protocols offered in general-purpose compilers has been assured with regard to sound proofs and the promise that during the computation, no information on parties' input would be leaking. In a parallel effort, nevertheless, the vulnerability of garbled circuit frameworks to timing attacks has, surprisingly, never been discussed in the literature. This paper introduces Goblin, the first timing attack against commonly employed garbled circuit frameworks. Goblin is a machine learning-assisted, non-profiling, single-trace timing SCA, which successfully recovers the garbler's input during the computation under different scenarios, including various GC frameworks, benchmark functions, and the number of garbler's input bits. In doing so, Goblin hopefully paves the way for further research in this matter.

*Mohammad Hashemi, Domenic Forte, Fatemeh Ganji*

**[Applied Cryptography and Network Security, (ACNS 24)](https://eprint.iacr.org/2023/001.pdf)** 