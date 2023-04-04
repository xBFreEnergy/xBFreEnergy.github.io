---
template: main.html
title: xBFreE command-line for MMPBSA calculations
---

## **xBFreE** command-line for MMPBSA calculations
As we explain previously **xBFreE** uses subcommands for every BFE method and MD program. Here we show you the 
options for every subcommand to perform BFE calculations using MMPBSA

Each subcommand has their own arguments according to the MD program and method selected

=== "GROMACS"
    
    !!! note "For gmx_MMPBSA users!"
        This subcommand keeps the name and is similar to previous gmx_MMPBSA

    <div class="termy">
        ```console
        // All flags available in **xBFreE** are shown below:
        
        $ xbfree gmx_MMPBSA -h

        usage: run_cmd.py gmx_MMPBSA [-h] [-O] [--create_input [{gb,pb,rism,ala,decomp,nmode,gbnsr6,all} ...]] [--rewrite-output] [-s] [-ng] [-i FILE] [-xvvfile XVVFILE] [-o FILE] [-do FILE] [-eo FILE] [-deo FILE] [-v]
                                     [-cs <Structure File>] [-ci <Index File>] [-cg index index] [-ct [TRJ ...]] [-cp <Topology>] [-cr <PDB File>] [-rs <Structure File>] [-ri <Index File>] [-rg index] [-rt [TRJ ...]] [-rp <Topology>]
                                     [-ls <Structure File>] [-li <Index File>] [-lg index] [-lt [TRJ ...]] [-lp <Topology>] [-prefix <file prefix>] [--input-file-help] [--clean]
        
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
        
        Complex:
          Complex files and info that are needed to perform the calculation. If the receptor and/or the ligand info is not defined, we generate them from that of the complex.
        
          -cs <Structure File>  Structure file of the complex. Allowed formats: *.tpr (recommended), *.pdb
          -ci <Index File>      Index file of the bound complex.
          -cg index index       Groups of receptor and ligand in complex index file. The notation is as follows: "-cg <Receptor group> <Ligand group>", ie. -cg 1 13
          -ct [TRJ ...]         Complex trajectories. Make sure the trajectory is fitted and pbc have been removed. Allowed formats: *.xtc (recommended), *.trr, *.pdb (specify as many as you'd like).
          -cp <Topology>        The complex Topology file. When it is defined -lm option is not needed
          -cr <PDB File>        Complex Reference Structure file. This option is optional but recommended (Use the PDB file used to generate the topology in GROMACS). If not defined, the chains ID assignment (if the structure used in -cs
                                does not have chain IDs) will be done automatically according to the structure (can generate wrong mapping).
        
        Receptor:
          Receptor files and info that are needed to perform the calculation. If the receptor info is not defined, we generate it from that of the complex.
        
          -rs <Structure File>  Structure file of the unbound receptor for multiple trajectory approach. Allowed formats: *.tpr (recommended), *.pdb
          -ri <Index File>      Index file of the unbound receptor.
          -rg index             Receptor group in receptor index file. Notation: "-lg <Receptor group>", e.g. -rg 1
          -rt [TRJ ...]         Input trajectories of the unbound receptor for multiple trajectory approach. Allowed formats: *.xtc (recommended), *.trr, *.pdb, *.gro (specify as many as you'd like).
          -rp <Topology>        Topology file of the receptor.
        
        Ligand:
          Ligand files and info that are needed to perform the calculation. If the ligand are not defined, we generate it from that of the complex.
        
          -ls <Structure File>  Structure file of the unbound ligand for multiple trajectory approach. Allowed formats: *.tpr (recommended), *.pdb
          -li <Index File>      Index file of the unbound ligand. Only if tpr file was define in -ls.
          -lg index             Ligand group in ligand index file. Notation: "-lg <Ligand group>", e.g. -lg 13
          -lt [TRJ ...]         Input trajectories of the unbound ligand for multiple trajectory approach. Allowed formats: *.xtc (recommended), *.trr, *.pdb, *.gro (specify as many as you'd like).
          -lp <Topology>        Topology file of the ligand.
        
        Miscellaneous Options:
          -prefix <file prefix>
                                Prefix for intermediate files.
          --input-file-help     Print all available options in the input file.
          --clean               Clean temporary files and quit.
        
        xBFreEnergy is a tool to compute Binding Free Enrgy with different methods including MMPBSA and LIE
        ```
    </div>

=== "AMBER"


=== "NAMD"

=== "CHARMM"