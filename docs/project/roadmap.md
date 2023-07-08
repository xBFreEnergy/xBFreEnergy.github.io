# Roadmap
Our roadmap prioritizes the implementation of widely used methods. Currently, we have successfully implemented 
gmx_MMPBSA, which incorporates several methods derived from PB and other implicit solvent-based approaches. 
However, our future plans involve expanding our method offerings to include additional approaches such as 
LIE, FEP, and TI.

!!! important
    Please note that our roadmap is subject to change and should be considered tentative. We cannot guarantee exact 
    timelines as we currently lack financial resources and can only dedicate our free time to project development. 
    However, we encourage you to consider becoming a sponsor to support our efforts. By becoming a sponsor, we can 
    aim for full-time development and provide more accurate release dates in the future. For more information on 
    sponsorship opportunities, please visit [becoming a sponsor](../../sponsor#how-to-become-a-sponsor).

```mermaid
gantt
    dateFormat  YYYY-MM-DD
    title       xBFreE Roadmap
    
    section xBFreE Package
        Publish v1.0.0rc1 release   :milestone, 2023-07-01, 0d
        Publish stable release (v1.0.0)   :milestone, 2023-07-16, 0d
        Publish v1.1.0rc1 release   :milestone, 2023-08-01, 0d
        Publish v1.1.0 stable release   :milestone, 2023-08-16, 0d
        Publish v2.0.0rc1 release   :milestone, 2023-09-16, 0d
        Publish stable release (v2.0.0)   :milestone, 2023-10-16, 0d
    
    section xBFreE Development
        Develop and test   :            des1, 2023-05-01, 2023-06-30
        Fix bugs and typos    :            des2, 2023-07-01, 2023-07-15
        MMPBSA (APBS) :            des1, 2023-07-15, 2023-07-31
        Fix bugs and typos  :            des1, 2023-08-01, 2023-08-15
        LIE (D-Model)  :            des1, 2023-08-15, 2023-09-15
        Fix bugs and typos     :            des2, 2023-09-16, 2023-10-15


```
