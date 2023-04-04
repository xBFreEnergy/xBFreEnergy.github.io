---
template: main.html
title: xBFreE vs other MMPBSA programs
---

# Comparison of **xBFreE** vs other MMPBSA programs
This comparison is based on the documentation of the different programs

### Calculation features
| Feature                      |                **xBFreE**                 |              [gmx_MMPBSA][3]              |              MMPBSA.py [^1]               |                 [g_mmpbsa][1]                  |  CaFe   |
|:-----------------------------|:-----------------------------------------:|:-----------------------------------------:|:-----------------------------------------:|:----------------------------------------------:|:-------:|
| **Binding free energies**    |                 PB and GB                 |                 PB and GB                 |                 PB and GB                 |                       PB                       |   PB    |
| * PB models                  |           Linear and Non-Linear           |           Linear and Non-Linear           |         Linear and Non-Linear[^0]         |                    pending                     | pending |
| * GB models                  |          1, 2, 5, 7, 8 and NSR6           |          1, 2, 5, 7, 8 and NSR6           |             1, 2, 5, 7 and 8              |                                                |         |
| **Stability**                | :material-check-bold:{.scale_icon_medium} | :material-check-bold:{.scale_icon_medium} | :material-check-bold:{.scale_icon_medium} |                                                | pending |
| **Alanine scanning**         | :material-check-bold:{.scale_icon_medium} | :material-check-bold:{.scale_icon_medium} | :material-check-bold:{.scale_icon_medium} | :material-check-bold:{.scale_icon_medium} [^2] | pending |
| **Entropy corrections** [^3] |           NMODE, QH, IE, and C2           |           NMODE, QH, IE, and C2           |               NMODE and QH                |                                                | pending |
| **Decomposition schemes**    |         Per-Residues and Per-Wise         |         Per-Residues and Per-Wise         |         Per-Residues and Per-Wise         |                  Per-Residues                  | pending |
| **QM/MMGBSA**                | :material-check-bold:{.scale_icon_medium} | :material-check-bold:{.scale_icon_medium} | :material-check-bold:{.scale_icon_medium} |                                                | pending |
| **MM/3D-RISM**               | :material-check-bold:{.scale_icon_medium} | :material-check-bold:{.scale_icon_medium} | :material-check-bold:{.scale_icon_medium} |                                                | pending |
| **Support Membrane Protein** | :material-check-bold:{.scale_icon_medium} | :material-check-bold:{.scale_icon_medium} | :material-check-bold:{.scale_icon_medium} |                                                | pending |
| **Approximations**           |                 ST and MT                 |                 ST and MT                 |                 ST and MT                 |                       ST                       | pending |

### Technical features
| Feature                   |                **xBFreE**                 |              [gmx_MMPBSA][3]              |              MMPBSA.py [^1]               |        [g_mmpbsa][1]         | CaFE |
|:--------------------------|:-----------------------------------------:|:-----------------------------------------:|:-----------------------------------------:|:----------------------------:|:----:|
| **MD Program**            |       GROMACS, AMBER, NAMD, CHARMM        |                  GROMACS                  |                   AMBER                   |           GROMACS            | NAMD |
| * GROMACS Version         |              5.x and 20xx.x               |            4.x, 5.x and 20xx.x            |                    ---                    |   4.x, 5.x and 2016+ [^6]    |      |
| **Dependencies**          |              AmberTools20/21              |           AmberTools20/21 [^9]            |              AmberTools20/21              | APBS (1.2.x, 1.3.x or 1.4.x) |      |
| **Parallel computation**  | :material-check-bold:{.scale_icon_medium} | :material-check-bold:{.scale_icon_medium} | :material-check-bold:{.scale_icon_medium} |       Depends on APBS        |      |
| **Steps for:**            |                                           |                                           |                                           |                              |      |
| * Calculation and Summary |                    One                    |                    One                    |                    One                    |           Multiple           |      |
| * Analysis                |                    One                    |                    One                    |                 Multiple                  |           Multiple           |      |




## Analysis features
Please, check the **xBFreE-Analyzer** documentation for more information

| Feature                         |                **xBFreE**                 |              [gmx_MMPBSA][3]              |              MMPBSA.py [^1]               |                [g_mmpbsa][1]                 |  CaFE   |
|:--------------------------------|:-----------------------------------------:|:-----------------------------------------:|:-----------------------------------------:|:--------------------------------------------:|:-------:|
| **API**                         | :material-check-bold:{.scale_icon_medium} | :material-check-bold:{.scale_icon_medium} | :material-check-bold:{.scale_icon_medium} |                                              | pending |
| **Analyzer Tool**               | :material-check-bold:{.scale_icon_medium} | :material-check-bold:{.scale_icon_medium} |                   [^4]                    |                                              |         |
| * Multiple systems at same time | :material-check-bold:{.scale_icon_medium} | :material-check-bold:{.scale_icon_medium} |                                           |                                              |         |
| * Correlation between systems   | :material-check-bold:{.scale_icon_medium} | :material-check-bold:{.scale_icon_medium} |                                           |  :material-check-bold:{.scale_icon_medium}   |         |
| * Per-residue energies to PDB   | :material-check-bold:{.scale_icon_medium} | :material-check-bold:{.scale_icon_medium} |                                           |  :material-check-bold:{.scale_icon_medium}   |         |
| * Interactive visualization     | :material-check-bold:{.scale_icon_medium} | :material-check-bold:{.scale_icon_medium} |                                           |                                              |         |
| ** _3D Molecular Visualization_ |                   PyMOL                   |                   PyMOL                   |                                           |                                              |         |
| ** _Interactive Charts_         | :material-check-bold:{.scale_icon_medium} | :material-check-bold:{.scale_icon_medium} |                                           |                 static image                 |         |
| * Plotting tool                 |              xBFreE-Analyzer              |              gmx_MMPBSA_ana               |       API and graphics library [^5]       |                internal tools                |         |
| * Energetic Terms charts        |                    All                    |                    All                    |                                           | ΔG~polar~, ΔG~nonpolar~, ΔE~MM~ and ΔG~bind~ |         |
| * Export data to CSV file       | :material-check-bold:{.scale_icon_medium} | :material-check-bold:{.scale_icon_medium} | :material-check-bold:{.scale_icon_medium} |                                              |         |
| ** _Energy Summary_             | :material-check-bold:{.scale_icon_medium} | :material-check-bold:{.scale_icon_medium} | :material-check-bold:{.scale_icon_medium} |                                              |         |
| ** _Individual Energetic Terms_ | :material-check-bold:{.scale_icon_medium} | :material-check-bold:{.scale_icon_medium} |                                           |                                              |         |



  [^1]: [MMPBSA.py][4] is included in AMBER package
  [^2]: Without documentation
  [^3]: NMODE = Normal modes approximation, QH = Quasic-Harmony approximation, IE = Interaction Entropy
approximation, and C2 = C2 Entropy
  [^4]: We plan to extend gmx_MMPBSA compatibility to MMPBSA.py's results
  [^5]: Currently there is a repository ([AmberUtils][5]) for analysing the results
  [^6]: GROMACS 20xx.x is not officially supported. There is a Pull Request that offers a minimum compatibility 
with versions higher than 2016.x one, but still with limitations
  [^7]: It is not clear whether it does support GROMACS versions 20xx.x or not, but we assume that it does since 
it is script-based
  [^8]: It is not clear whether it does support APBS versions 3.x.x
  [^9]: gmx_MMPBSA is compatible with AmberTools20, AmberTools21, and AmberTools22
  [^0]: gmx_MMPBSA supports Linear and Non-Linear PB equations. [MMPBSA.py][4] on the other hand, requires the user to 
modify manually the *.mdin input files 
  

  [1]: https://github.com/RashmiKumari/g_mmpbsa
  [2]: https://github.com/aspitaleri/gmxpbsa
  [3]: https://github.com/Valdes-Tresanco-MS/gmx_MMPBSA
  [4]: https://ambermd.org/doc12/Amber21.pdf#chapter.36
  [5]: https://github.com/williamdlees/AmberUtils

  