---
template: main.html
title: gmx_MMPBSA in a nutshell
---

# **xBFreE** in a nutshell
**xBFreE** implements all the features in gmx_MMPBSA with support for GROMACS, AMBER, NAMD, and CHARMM. For now, this 
includes only MMPBSA and its derivatives as methods for calculating binding free energy. We intend to implement 
several more methods, such as LIE, FEP, TI, etc.

## **xBFreE** general workflow
```mermaid
flowchart TB
    a1[xbfree]
    subgraph MMPBSA
    direction TB
        m1{{gmx_MMPBSA}}
        m2{{amber_MMPBSA}}
        m3{{namd_MMPBSA}}
        m4{{charmm_MMPBSA}}
    end
    a1 --> m1
    a1 --> m2
    a1 --> m3
    a1 --> m4

    m1 --> f1[Calculation]
    m2 --> f1
    m3 --> f1
    m4 --> f1
    f1 --> g1[Results]
```


## Types of calculations you can do
There are many options available in **xBFreE**. These are some calculations you can perform with **xBFreE**:

### MMPBSA calculations
* **Normal binding free energies**, with either PB, GB or 3D-RISM solvent models. Each can be done with either
1, 2, or 3 different trajectories. The complex trajectory must always be provided. Whichever trajectories of the 
receptor and/or ligand that are NOT specified will be extracted from that of the complex. This allows a 1-, 
2-, or 3-trajectory analysis. All PB calculations and GB models are performed via the **sander** program. Calculations 
with 3D-RISM solvent model are performed with `rism3d.snglpnt` built with AmberTools.
* **Stability** calculations with any solvent model (_i.e_ PB, GB or 3D-RISM).
* **Alanine scanning** with either PB or GB implicit solvent models. All trajectories will be mutated to match
the mutated topology files, and whichever calculations that would be carried out for the normal systems are
also carried out for the mutated systems. Note that only 1 mutation is allowed per simulation, and it must
be to an alanine or glycine. If `mutant_only` variable is not set to 1, differences resulting from the mutations are 
calculated.
* **Entropy corrections**. An entropy term can be added to the free energies calculated above using either the
quasi-harmonic, the normal mode, interaction entropy or C2 approximations. Calculations will be performed for the normal 
and mutated systems (alanine scanning) as requested. Normal mode calculations are done with the
`mmpbsa_py_nabnmode` program included with AmberTools.
* **Decomposition schemes**. The energy terms will be decomposed according to the decomposition scheme (per-residue or 
per-wise) outlined in the `idecomp` variable description. This should work with all the above, though entropy terms
cannot be decomposed.
* **QM/MMGBSA**. This is a binding free energy (or stability calculation) using the Generalized Born solvent
model allowing you to treat part of your system with a quantum mechanical Hamiltonian.
* **Support for Membrane Proteins**. Calculate the MMPBSA binding free energy for a ligand bound to a protein
that is embedded into a membrane. In this case, the membrane is implemented as a slab-like region with a uniform or 
heterogeneous dielectric constant depth profile.

### LIE calculations 
Coming soon!

### FEP calculations 
Coming soon!

### TI calculations 
Coming soon!

## **xBFreE** a technical view
**xBFreE** is a python module that contains 2 applications: 

* [**xbfree**][5] is the fundamental application and carries out all the calculations mentioned above
* [**xbfree-test**][7] is a tool designed to test if the installation was successful by running one or more available 
  [examples][4] in **xBFreE**.

!!! important
    We decided to separate the GUI for analysis into a separate python package. In this way, each application can have 
    its own development, as well as better software development dynamics. Additionally, it can be installed 
    according to the user's need. For example, for HPC installations, **xBFreE-Analyzer** is not required, while 
    **xBFreE** does not need to be installed to analyze the results. In any case, **xBFreE** still retains the 
    ability to open **xBFreE-Analyzer** (whenever it is available) after finishing the calculation. Please, check 
    the [xBFreE-Analyzer documentation]() for more information.

  * [**xbfree-analyzer**][6] provides an intuitive way to analyze the data from **xBFreE** calculations and save 
  high-quality images


  [1]: https://pubs.acs.org/doi/10.1021/ct300418h
  [2]: ../advanced.md#advanced-options
  [3]: #types-of-calculations-you-can-do
  [4]: ../examples/README.md
  [5]: howworks.md
  [6]: ../analyzer.md
  [7]: ../examples/gmx_MMPBSA_test.md#running-gmx_mmpbsa_test