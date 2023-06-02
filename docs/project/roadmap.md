# Roadmap
Our roadmap focuses on first implementing methods that are widely used. Initially, starting with gmx_MMPBSA, we 
implemented most of the methods derived from PB. However, in the future, we want to implement several more methods, 
like LIE, FEP, and TI.

!!! important
    It is important to clarify that our roadmap is tentative but does not guarantee that it is exact. As we mentioned, 
    we do not have financing, so we can only dedicate our free time to the project development. If possible, 
    consider [becoming a sponsor](../../sponsor#how-to-become-a-sponsor). Shortly, we plan to apply for financing that 
    will allow full-time development and therefore have more exact release dates.   

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
