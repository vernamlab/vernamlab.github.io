---
title: "Gate-Level Side-Channel Leakage Ranking with Architecture Correlation Analysis"
paper_url: "https://ieeexplore.ieee.org/abstract/document/10179450"
year: 2023
---

![Gate paper image](/img/papers/gate.png)

While side-channel leakage is traditionally evaluated from a fabricated chip, it is more time-efficient and cost-effective to do so during the design phase of the chip. We present a methodology to rank the gates of a design according to their contribution to the side-channel leakage of the chip. The methodology relies on logic synthesis, logic simulation, gate-level power estimation, and gateleakage assessment to compute a ranking. The ranking metric can be defined as a specific test by correlating gate-level activity with aleakage model, or else as a non-specific test by evaluating gate-level activity in response to distinct test vector groups. Our results show that only a minority of the gates in a design contribute most of the side-channel leakage. We demonstrate this property for several designs, including a hardware AES coprocessor and a cryptographic hardware/software interface in a five-stage pipelined RISC processor

*Pantea Kiaei, Yuan Yao, Zhenyuan Liu, Nicole Fern, Cees-Bart Breunesse, Jasper Van Woudenberg, Kate Gillis, Alex Dich, Peter Grossmann, Patrick Schaumont*

**[IEEE Transactions on Emerging Topics in Computing 2023](https://ieeexplore.ieee.org/abstract/document/10179450)** 