---
title: "LeakyOhm: Secret Bits Extraction using Impedance Analysis"
paper_url: "https://eprint.iacr.org/2023/693"
year: 2023
---

![LeakyOhm paper image](/img/papers/leaky.png)

The threat of physical side-channel attacks and their countermeasures is a widely researched field. Most physical side-channel attacks rely on the unavoidable influence of computation or storage on voltage or current fluctuations. Such data-dependent influence can be exploited by, for instance, power or electromagnetic analysis. In this work, we introduce a novel non-invasive physical side-channel attack, which exploits the data-dependent changes in the impedance of the chip. Our attack relies on the fact that the temporarily stored contents in registers alter the physical characteristics of the circuit, which results in changes in the die's impedance. To sense such impedance variations, we deploy a well-known RF/microwave method called scattering parameter analysis, in which we inject sine wave signals with high frequencies into the system's power distribution network (PDN) and measure the echo of the signals. We demonstrate that according to the content bits and physical location of a register, the reflected signal is modulated differently at various frequency points enabling the simultaneous and independent probing of individual registers.

*Saleh Khalaj Monfared,Tahoura Mosavirik, Shahin Tajik*

**[ACM Conference on Computer and Communications Security 2023, (CCS 23)](https://eprint.iacr.org/2023/693)** 