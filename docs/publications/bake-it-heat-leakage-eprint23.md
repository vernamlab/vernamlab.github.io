---
title: "Bake It Till You Make It: Heat-induced Leakage from Masked Neural Networks"
paper_url: "https://eprint.iacr.org/2023/076"
year: 2023
---

![Bake paper image](/img/papers/bake.png)

Masking has become one of the most effective approaches for securing hardware designs against side-channel attacks. Irrespective of the effort put into correctly implementing masking schemes on a field programmable gate array (FPGA), leakage can be unexpectedly observed. This is due to the fact that the assumption underlying all masked designs, i.e., the leakages of different shares are independent of each other, may no longer hold in practice. In this regard, extreme temperatures have been shown to be an important factor in inducing leakage, even in correctly-masked designs. This has previously been verified using an external heat generator (i.e., a climate chamber). In this paper, we examine whether the leakage can be induced using the circuit components themselves. Specifically, we target masked neural networks (NNs) in FPGAs, with one of the main building blocks being block random access memory (BRAM) and flip-flops (FFs).

*Dev M Mehta, Mohammad Hashemi, David S Koblah, Domenic Forte, Fatemeh Ganji*

**[Cryptology ePrint Archive, 2023](https://eprint.iacr.org/2023/076)** 