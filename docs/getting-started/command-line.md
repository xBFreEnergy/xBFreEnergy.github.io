---
template: main.html
title:
---

## **xBFreE** command-line
**xBFreE** divide en subcomandos los métodos para el cálculo de BFE como los programas de MD. Para simplificar la 
escritura, la aplicación la nombramos como `xbfree`.

<div class="termy">
    ```console
    // All flags available in **xBFreE** are shown below:

    $ xbfree -h
    
    usage: run_cmd.py [-h] [-v] {gmx_MMPBSA,amber_MMPBSA,namd_MMPBSA,charmm_MMPBSA} ...
    
    xBFreEnergy is a tool to compute Binding Free Energy with different methods including MMPBSA and LIE
    
    positional arguments:
      {gmx_MMPBSA,amber_MMPBSA,namd_MMPBSA,charmm_MMPBSA}
                            Methods to compute Binding Free Energy
        gmx_MMPBSA          MMPBSA calculations for GROMACS
        amber_MMPBSA        MMPBSA calculations for AMBER
        namd_MMPBSA         MMPBSA calculations for NAMD
        charmm_MMPBSA       MMPBSA calculations for CHARMM
    
    optional arguments:
      -h, --help            show this help message and exit
      -v, --version         show program's version number and exit
    
    xBFreEnergy is a tool to compute Binding Free Energy with different methods including MMPBSA and LIE
    ```
    

</div>

## Sub-commands structure
Each subcommand has their own arguments according to the MD program and method selected. However, we decide to make 
some arguments redundant to simplify the command-line instructions and keep similar to gmx_MMPBSA. Take a look at 
the example below 

=== "GROMACS"
    
    <div class="termy">
        ```console
        // All flags available in **xBFreE** are shown below:
        
        $ xbfree gmx_MMPBSA -h

        usage: ...

        This is the core of gmx_MMPBSA and it will do all the calculations
        
        optional arguments:
          -h, --help            show this help message and exit
          -O, --overwrite       Allow output files to be overwritten
          --create_input [{gb,pb,rism,ala,decomp,nmode,gbnsr6,all} ...]
                                Create an new input file with selected calculation type.
          --rewrite-output      Do not re-run any calculations, just parse the output files from the previous calculation and rewrite the output files.
          -s, --stability       Perform stability calculation. Only the complex parameters are required. In any other case receptor and ligand parameters will be ignored
          -ng, --nogui          No open gmx_MMPBSA_ana after all calculations finished
          -v, --version         show program's version number and exit
        
        Input and Output Files:
          These options specify the input files and optional output files.
        
          -i FILE               MM/PBSA input file.
          -xvvfile XVVFILE      XVV file for 3D-RISM.
          -o FILE               Output file with selected method (MMPBSA or LIE) statistics.
          -do FILE              Output file for decomposition statistics summary.
          -eo FILE              CSV-format output of all energy terms for every frame in every calculation. File name forced to end in [.csv]. This file is only written when specified on the command-line.
          -deo FILE             CSV-format output of all energy terms for each printed residue in decomposition calculations. File name forced to end in [.csv]. This file is only written when specified on the command-line.
        
        < Gromacs specific arguments >
        
        Miscellaneous Options:
          -prefix <file prefix>
                                Prefix for intermediate files.
          --input-file-help     Print all available options in the input file.
          --clean               Clean temporary files and quit.
        
        xBFreEnergy is a tool to compute Binding Free Enrgy with different methods including MMPBSA and LIE
        ```
    </div>

=== "AMBER"
    <div class="termy">
        ```console
        // All flags available in **xBFreE** are shown below:
        
        $ xbfree amber_MMPBSA -h

        usage: ...

        This is the core of gmx_MMPBSA and it will do all the calculations
        
        optional arguments:
          -h, --help            show this help message and exit
          -O, --overwrite       Allow output files to be overwritten
          --create_input [{gb,pb,rism,ala,decomp,nmode,gbnsr6,all} ...]
                                Create an new input file with selected calculation type.
          --rewrite-output      Do not re-run any calculations, just parse the output files from the previous calculation and rewrite the output files.
          -s, --stability       Perform stability calculation. Only the complex parameters are required. In any other case receptor and ligand parameters will be ignored
          -ng, --nogui          No open gmx_MMPBSA_ana after all calculations finished
          -v, --version         show program's version number and exit
        
        Input and Output Files:
          These options specify the input files and optional output files.
        
          -i FILE               MM/PBSA input file.
          -xvvfile XVVFILE      XVV file for 3D-RISM.
          -o FILE               Output file with selected method (MMPBSA or LIE) statistics.
          -do FILE              Output file for decomposition statistics summary.
          -eo FILE              CSV-format output of all energy terms for every frame in every calculation. File name forced to end in [.csv]. This file is only written when specified on the command-line.
          -deo FILE             CSV-format output of all energy terms for each printed residue in decomposition calculations. File name forced to end in [.csv]. This file is only written when specified on the command-line.
        
        < Amber specific arguments >
        
        Miscellaneous Options:
          -prefix <file prefix>
                                Prefix for intermediate files.
          --input-file-help     Print all available options in the input file.
          --clean               Clean temporary files and quit.
        
        xBFreEnergy is a tool to compute Binding Free Enrgy with different methods including MMPBSA and LIE
        ```
    </div>

=== "NAMD"
    <div class="termy">
        ```console
        // All flags available in **xBFreE** are shown below:
        
        $ xbfree namd_MMPBSA -h

        usage: ...

        This is the core of gmx_MMPBSA and it will do all the calculations
        
        optional arguments:
          -h, --help            show this help message and exit
          -O, --overwrite       Allow output files to be overwritten
          --create_input [{gb,pb,rism,ala,decomp,nmode,gbnsr6,all} ...]
                                Create an new input file with selected calculation type.
          --rewrite-output      Do not re-run any calculations, just parse the output files from the previous calculation and rewrite the output files.
          -s, --stability       Perform stability calculation. Only the complex parameters are required. In any other case receptor and ligand parameters will be ignored
          -ng, --nogui          No open gmx_MMPBSA_ana after all calculations finished
          -v, --version         show program's version number and exit
        
        Input and Output Files:
          These options specify the input files and optional output files.
        
          -i FILE               MM/PBSA input file.
          -xvvfile XVVFILE      XVV file for 3D-RISM.
          -o FILE               Output file with selected method (MMPBSA or LIE) statistics.
          -do FILE              Output file for decomposition statistics summary.
          -eo FILE              CSV-format output of all energy terms for every frame in every calculation. File name forced to end in [.csv]. This file is only written when specified on the command-line.
          -deo FILE             CSV-format output of all energy terms for each printed residue in decomposition calculations. File name forced to end in [.csv]. This file is only written when specified on the command-line.
        
        < NAMD specific arguments >
        
        Miscellaneous Options:
          -prefix <file prefix>
                                Prefix for intermediate files.
          --input-file-help     Print all available options in the input file.
          --clean               Clean temporary files and quit.
        
        xBFreEnergy is a tool to compute Binding Free Enrgy with different methods including MMPBSA and LIE
        ```
    </div>

=== "CHARMM"
    <div class="termy">
        ```console
        // All flags available in **xBFreE** are shown below:
        
        $ xbfree charmm_MMPBSA -h

        usage: ...

        This is the core of gmx_MMPBSA and it will do all the calculations
        
        optional arguments:
          -h, --help            show this help message and exit
          -O, --overwrite       Allow output files to be overwritten
          --create_input [{gb,pb,rism,ala,decomp,nmode,gbnsr6,all} ...]
                                Create an new input file with selected calculation type.
          --rewrite-output      Do not re-run any calculations, just parse the output files from the previous calculation and rewrite the output files.
          -s, --stability       Perform stability calculation. Only the complex parameters are required. In any other case receptor and ligand parameters will be ignored
          -ng, --nogui          No open gmx_MMPBSA_ana after all calculations finished
          -v, --version         show program's version number and exit
        
        Input and Output Files:
          These options specify the input files and optional output files.
        
          -i FILE               MM/PBSA input file.
          -xvvfile XVVFILE      XVV file for 3D-RISM.
          -o FILE               Output file with selected method (MMPBSA or LIE) statistics.
          -do FILE              Output file for decomposition statistics summary.
          -eo FILE              CSV-format output of all energy terms for every frame in every calculation. File name forced to end in [.csv]. This file is only written when specified on the command-line.
          -deo FILE             CSV-format output of all energy terms for each printed residue in decomposition calculations. File name forced to end in [.csv]. This file is only written when specified on the command-line.
        
        < CHARMM specific arguments >
        
        Miscellaneous Options:
          -prefix <file prefix>
                                Prefix for intermediate files.
          --input-file-help     Print all available options in the input file.
          --clean               Clean temporary files and quit.
        
        xBFreEnergy is a tool to compute Binding Free Enrgy with different methods including MMPBSA and LIE
        ```
    </div>