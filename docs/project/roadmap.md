# Roadmap
Our roadmap prioritizes the implementation of widely used methods. We have successfully implemented gmx_MMPBSA, 
which incorporates several PB-derived methods and other implicit solvent-based approaches. xBFreE is an evolution of 
gmx_MMPBSA, so we will work to optimize it, facilitating the implementation of new methods and their respective 
analysis. This tentative roadmap may change as we develop the points indicated.   
We have set a goal that allows us to optimize and expand the methods for calculating endpoint binding free energy 
available to all users regardless of the MD engine they select. However, our plans involve expanding our method 
offering to include additional approaches such as FEP and TI.  

!!! important
    You can to consider becoming a sponsor to support our efforts and promote the project. By becoming a sponsor, we 
    can aim for full-time development and provide more accurate release dates in the future. For more information on 
    sponsorship opportunities, please visit [becoming a sponsor](../../sponsor#how-to-become-a-sponsor).


::timeline::

- content: |
    
    **xBFreE**  
    - Full portability of gmx_MMPBSA to xBFreE   
    - Update dependencies and fix bugs  
    - Expand calculations for AMBER, NAMD and CHARMM MD engines  
    - Documentation, tutorials, and examples for every MD engine implementation   
    - Enhancement issues reported previously in gmx_MMPBSA (Easy to implement)   
    - New atomic radii definition implementation  
    **xBFreE-Analyzer**  
    - Full portability of gmx_MMPBSA_ana to xBFreE-Analyzer   
    - Update dependencies and fix bugs  
    - Documentation, tutorials, and examples   
    - Compatibility with gmx_MMPBSA output files   
    - Enhancement issues reported previously in gmx_MMPBSA (Easy to implement)   
  icon: ':material-rocket-launch-outline:'
  sub_title: 1st semester  
  title: Portability
- content: |
    **xBFreE**  
    - Code optimization  
    - Unit test implementation  
    - New API develop (begin)  
    - Enhancement issues reported previously in gmx_MMPBSA (Easy to implement)   
    **xBFreE-Analyzer**  
    - Code optimization  
    - Unit test implementation  
    - New API develop (begin)  
    - Plotly support (begin)  
    - Predefined chart format implementation  
    - Enhancement issues reported previously in gmx_MMPBSA (Easy to implement)   
  icon: ':simple-googleoptimize:'
  sub_title: 2nd semester  
  title: Optimization
- content: |
    **xBFreE**  
    - PBDelphi model implementation  
    - APBS model implementation  
    - Add 3D-RISM-AI  
    - Add SASA-Based Model for Conformational Entropy Calculations  
    - Add support for explicit water molecules    
    - Documentation for the new methods  
    - LIE model parametrization (begin)  
    **xBFreE-Analyzer**  
    - New API implementation  
    - Plotly support (implementation ?)    
    - Extension for Jupyter Notebook
  icon: ':material-gauge-empty:'
  sub_title: 3rd semester
  title: New features
- content: |
    **xBFreE**  
    - LIE-D model implementation  
    - New LIE model parametrization (implementation ?)  
    - Documentation    
    **xBFreE-Analyzer**  
    - LIE model implementation  
    - Implementation of Common MD calculations such as RMSD, RMSF, etc.    
    - Documentation    
  icon: ':material-plus-box:'
  sub_title: 4th semester
  title: New features

::/timeline::
