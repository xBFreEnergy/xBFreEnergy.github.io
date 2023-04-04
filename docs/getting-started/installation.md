---
template: main.html
title: Installation
---
# **xBFreE** Installation

!!! important "Dependencies"
    **xBFreE** has several important dependencies:
        
    - mpi4py
    - AmberTools20/21
    - Gromacs

    Depending on the installation mode, these dependencies can be installed by the user, be part of a precompiled 
    package, or be required by an administrator. Please check each installation mode and make sure you have all of 
    them supplied.


Currently, **xBFreE** can be installed using three ways:

- [Manual installation](#manual-installation)
- [Docker Package](https://docs.alliancecan.ca/wiki/GROMACS#gmx_MMPBSA)
- [Singularity Package](https://docs.alliancecan.ca/wiki/GROMACS#gmx_MMPBSA)

## Manual installation
You can carry out the installation of **xBFreE** in three ways: 

`conda environment` (Recommended for PC installation)
:   The conda environment provides a clean and efficient way of installing **xBFreE**. It also allows to have 
    different versions of xBFreE in isolated environments, thus reducing the possibility of incompatibility with 
    other packages. Installation time is also less since it does not require the compilation of AmberTools or GROMACS. 
    
??? "Miniconda Installation"

    Download and install [Miniconda]

    <div class="termy">

    ```bash
    $ curl -O https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
    ---> 100%

    $ chmod +x Miniconda3-latest-Linux-x86_64.sh

    $ ./Miniconda3-latest-Linux-x86_64.sh
    ---> 100%

    Successful miniconda intallation
    ```

    </div>

    ??? note "Copy described intructions"     

        ``` bash 
        curl -O https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh   # (1)!
        chmod +x Miniconda3-latest-Linux-x86_64.sh                                      # (2)!
        ./Miniconda3-latest-Linux-x86_64.sh                                             # (3)!
       
        ```
    
        1. Download Miniconda installer
        2. Change permissions for the installer
        3. Execute and install miniconda


`virtual environment` (Recommended for HPC installation -- coming soon!)
:   The virtual environment provides a clean and efficient way of installing **xBFreE**. It also allows to have 
different versions of **xBFreE** in isolated environment, thus reducing the possibility of incompatibility with 
other packages. Differently to `conda environment` this environment only contain python packages and not 
pre-compiled libraries.  

`AmberTools compilation` (Recommended when you need to modify sander o compile AmberTools in a specific way)
:   In this way, we assume that you have AmberTools compiled on your machine and that you want to do an installation 
without worrying about enabling or disabling conda environments. It also involves user compilation of GROMACS, which 
takes considerable installation time. This way also requires installed packages to be compatible and installation 
errors are more frequent.

### Preparing the environment
Before installing **xBFreE** we need to prepare the environment with all dependencies.

=== "conda environment"

    !!! Info "Important"
        Make sure to have conda installed in your computer. Check the third tab "Miniconda installation" for more 
        info. 

    === "`*.yml file`"    
        Installing **xBFreE** using a requierement yml file. 

        :material-file-download-outline:{:.heart } Download **[env.yml](env.yml)** file

        <div class="termy">

        ```console
        // Create a new environment and use the *.yml file to install dependencies
        $ conda env create -n xbfree-env --file env.yml

        // To use xBFreE, just activate the environment
        $ conda activate xbfree-env
        ```
            
        </div>

        !!! important
            The latest release of **xBFreE** available in PYPI will be installed

        ??? note "Copy described intructions"     

            ``` bash 
            conda env create -n xbfree-env --file env.yml                                    # (1)
            conda activate xbfree-env                                                        # (2)
           
            ```
        
            1. Create the `xbfree-env` environment and use the *.yml file to install dependencies
            2. Activate `xbfree-env` environment


    === "`pip`"    
        Installing dependencies

        <div class="termy">

        ```console
        // Update conda
        $ conda update conda
        
        // Create a new environment and activate it
        $ conda create -n xbfree-env python=3.9 -y -q 
        $ conda activate xbfree-env
        
        // Install mpi4py and AmberTools
        $ conda install -c conda-forge mpi4py=3.1.3 ambertools=21.12 compilers=1.2.0 -y -q
        
        // Install updated version of ParmEd
        $ python -m pip install git+https://github.com/Valdes-Tresanco-MS/ParmEd.git@v3.4
        
        // Install PyQt5 required to use the GUI analyzer tool (xBFreE-Analyzer). Not needed for HPC
        $ python -m pip install pyqt5

        // (Optional) Install GROMACS
        $ conda install -c conda-forge gromacs==2022.4 -y -q
        
        // Install the latest version available in PYPI and xBFreE-Analyzer
        $ python -m pip install xbfree[xbfree-analyzer]
        ```                
        </div>

        ??? note "Copy described intructions"     

            ``` bash 
            conda update conda
            conda create -n xbfree-env python=3.9 -y -q                                      # (1)
            conda activate xbfree-env                                                        # (2)
            conda install -c conda-forge mpi4py=3.1.3 ambertools=21.12 compilers=1.2.0 -y -q      # (3)
            python -m pip install git+https://github.com/Valdes-Tresanco-MS/ParmEd.git@v3.4 # (4)
            python -m pip install pyqt5                                                     # (5)
            # Optional
            conda install -c conda-forge gromacs==2022.4 -y -q                                 # (6)
           
            ```
        
            1. Create `xbfree-env` environment
            2. Activate `xbfree-env` environment
            3. Install dependencies
            4. Install ParmEd
            5. Install PyQt5 if you will use xBFreE-Analyzer
            6. (Optional) Install GROMACS if GROMACS is not installed in your machine

[comment]: <> (        === "`conda`")

[comment]: <> (            Stable version only)
        
[comment]: <> (            ``` bash )

[comment]: <> (            conda update conda)

[comment]: <> (            conda create -n xbfree-env python=3.9 -y -q                                      # &#40;1&#41;        )

[comment]: <> (            conda activate xbfree-env                                                        # &#40;2&#41;                        )

[comment]: <> (            conda install -c conda-forge mpi4py=3.1.3 ambertools=21.12 compilers -y -q                  # &#40;3&#41;)

[comment]: <> (            python -m pip install git+https://github.com/ParmEd/ParmEd.git@16fb236          # &#40;4&#41;)

[comment]: <> (            python -m pip install pyqt5                                                     # &#40;5&#41;)

[comment]: <> (            # Optional)

[comment]: <> (            conda install -c conda-forge gromacs==2022.4 -y -q                                 # &#40;6&#41;)

[comment]: <> (            ```)
        
[comment]: <> (            1. Create `xbfree-env` environment)

[comment]: <> (            2. Activate `xbfree-env` environment)

[comment]: <> (            3. Install dependencies)

[comment]: <> (            4. Install ParmEd)

[comment]: <> (            5. Install PyQt5 if you will use gmx_MMPBSA_ana)

[comment]: <> (            6. &#40;Optional&#41; Install GROMACS if GROMACS is not installed in your machine)

[comment]: <> (            **INSTALLATION**)

[comment]: <> (            ```bash        )

[comment]: <> (            conda install -c conda-forge xBFreE                                         # &#40;1&#41;    )

[comment]: <> (            ```)
        
[comment]: <> (            1. Install xBFreE from conda-forge. This package will install all dependencies automatically)
        
[comment]: <> (            **UPDATE**)

[comment]: <> (            ```bash        )

[comment]: <> (            conda update xBFreE    )

[comment]: <> (            ```)

    [Miniconda]: https://docs.conda.io/en/latest/miniconda.html

=== "AmberTools compilation"
    [Follow the oficial AmberTools installation according to your OS](https://ambermd.org/Installation.php)
    !!! note
        We asume that AmberTools and their shell environment are correctly configured

    === "Rolling/stable release"
        **INSTALLATION**
        <div class="termy">
        ```console
        // Install uodated ParmEd
        $ amber.python -m pip install git+https://github.com/Valdes-Tresanco-MS/ParmEd.git@v3.4
        // Install xBFreE
        $ amber.python -m pip install xBFreE                                               
        ```
        </div>

        **UPDATE**
        <div class="termy">
        ```console
        // Update xBFreE
        $ amber.python -m pip install xBFreE -U
        ```
        </div>

        !!! info 
            Install xBFreE from PyPI PyPI has the latest version of *xBFreE* including stable and beta
            versions.
        
    === "development version" 
        **INSTALLATION**
        <div class="termy">
        ```bash
        // Install updated ParmEd
        $ amber.python -m pip install git+https://github.com/Valdes-Tresanco-MS/ParmEd.git@v3.4
        // Install xBFreE
        $ amber.python -m pip install git+https://github.com/Valdes-Tresanco-MS/xBFreE     
        ```
        </div>

        **UPDATE**
        <div class="termy">
        ```bash
        amber.python -m pip install git+https://github.com/Valdes-Tresanco-MS/xBFreE -U
        ```
        </div>

        !!! warning
            Install/update xBFreE from the master branch of GitHub repository. This version is only recommended 
            to test a new version or to try temporary solutions to reported bugs.

    !!! danger
        If you get an error related to installing `mpi4py`, you may want to install this package manually from 
        `conda-forge` as follows:

        ```
        amber.conda install -c conda-forge mpi4py=3.1.3
        ```
        
        If you get an error related to `pip`, you may want to install this package manually as follows:
        
        ```
        amber.conda install pip
        ```

### Installing **xBFreE** 
The steps described below includes the installation of the latest **xBFreE** release. Here, we show you how 
install/update other versions from PYPI or directly from the GitHub Repository

=== "Rolling/stable release"
    **INSTALLATION**
    <div class="termy">
    ```console
    // INSTALLATION
    $ python -m pip install xBFreE
    ```
    </div>

    **UPDATE**
    <div class="termy">
    ```console
    // UPDATE
    $ python -m pip install xBFreE -U
    ```
    </div>

    !!! info 
        Install/update xBFreE from PyPI. PyPI has the latest version of *xBFreE* including stable 
        and beta versions.

=== "development version" 

    **INSTALLATION**
    <div class="termy">
    ```console
    // INSTALLATION
    $ python -m pip install git+https://github.com/xBFreEnergy/xBFreE.git
    ```
    </div>

    **UPDATE**
    <div class="termy">
    ```console
    // UPDATE
    $ python -m pip install git+https://github.com/xBFreEnergy/xBFreE.git -U
    ```
    </div>

    !!! warning
        Install xBFreE from the master branch of GitHub repository. This is only recommended 
        for testing new versions or temporary solutions to reported bugs.

## Docker Package
Coming soon!
[sds](#installing-xbfree)

## Singularity Package
Coming soon!


## Autocompletion script
Since `gmx_MMPBSA` has many flags, we believe that this autocompletion can significantly improve productivity, be
more user-friendly and reduce the number of unforced errors. That is why we created this script, which manages the
autocompletion of the `gmx_MMPBSA`, `gmx_MMPBSA_ana` and `gmx_MMPBSA_test`.


**Execution:**
Enter the following command in the terminal:
    
    source /path/to/ambertools/lib/python3.x/site-packages/xbfree-env/xbfree-env.sh

!!! tip
    If you want it to be activated automatically, add that command to your .bashrc

!!! warning
    * This script requires that `gmx_MMPBSA`, `gmx_MMPBSA_ana` and `gmx_MMPBSA_test` be accessible in PATH
    * If the command-line above end in error, please make sure the file has executed permissions. 
        
        On Ubuntu, Debian, Linux Mint or related:
        
        * GUI:

            * `Right-click on xbfree-env.sh file` >

            * `Properties` > 

            * `Permissions` > 

            * `Mark the checkbox "Allow to execute the file as a program"`
        
        * Terminal:
            
                chmod 755 /path/to/ambertools/lib/python3.x/site-packages/xbfree-env/xbfree-env.sh
    
        
**Once you make the source of xbfree-env.sh you can check its operation as follows:**

_All you have to do is enter the name of the program in the terminal and press the tab key twice:_
    
    xbfree <tab> <tab>

## Testing the operation of xBFreE
After preparing everything to run `xBFreE`, it only remains to check its correct operation. To know how to do it, 
consult the documentation of [`xBFreE_test`](../examples/gmx_MMPBSA_test.md#running-gmx_mmpbsa_test)
