


    const questions = [
      {
		  
        question: "A 23-year-old student has been feeling increasingly fatigued and notices his heart rate is elevated. A blood test reveals increased serum lactate levels. Which of the following best explains why a lack of oxygen leads to lactate accumulation?",
        options: [
            "A) Inhibition of glycolysis",
            "B) Activation of the pentose phosphate pathway",
            "C) Impaired electron transport chain function",
            "D) Increased mitochondrial ATP output",
            "E) Excess protein catabolism"
        ],
        correctIndex: 2,
        explanations: [
            "Incorrect: Glycolysis actually continues during anaerobic conditions.",
            "Incorrect: This is a separate pathway not directly linked to lactate accumulation.",
            "Correct: Oxygen is the final electron acceptor in the ETC. Without it, oxidative phosphorylation stops, and cells shift to anaerobic glycolysis, leading to lactate build-up.",
            "Incorrect: Mitochondrial ATP production decreases without oxygen.",
            "Incorrect: Protein catabolism doesn't directly cause lactate rise."
        ],
        slideLink: "Lecture 22 – Enzymes, Krebs, ATP"
    },
    {
        question: "A mutation in a gene causes the insertion of two extra nucleotides early in the coding sequence. Which of the following is the most likely outcome?",
        options: [
            "A) A synonymous mutation",
            "B) A missense mutation",
            "C) A nonsense mutation",
            "D) A frameshift mutation",
            "E) Alternative splicing"
        ],
        correctIndex: 3,
        explanations: [
            "Incorrect: A synonymous mutation does not change the amino acid and typically occurs at a single base.",
            "Incorrect: A missense mutation results in a different amino acid but does not shift the frame.",
            "Incorrect: Nonsense mutations create a premature stop codon, but this involves a base substitution, not insertion.",
            "Correct: Inserting two nucleotides alters the reading frame, which disrupts the downstream amino acid sequence.",
            "Incorrect: Splicing is related to intron/exon processing, not coding frame."
        ],
        slideLink: "Lecture 19 – DNA Basics (Slide: 'Frameshift mutations')"
    },
    {
        question: "Which of the following is a key function of the Na⁺/K⁺ ATPase in maintaining the resting membrane potential?",
        options: [
            "A) Passive sodium influx",
            "B) Passive potassium efflux",
            "C) Active sodium efflux and potassium influx",
            "D) Facilitated calcium influx",
            "E) Proton pump activity"
        ],
        correctIndex: 2,
        explanations: [
            "Incorrect: Sodium enters passively through channels, not via the pump.",
            "Incorrect: Potassium may leak out, but active pumping is separate.",
            "Correct: The pump actively moves 3 Na⁺ out and 2 K⁺ in, contributing to a net negative charge inside the cell.",
            "Incorrect: Calcium influx is not mediated by Na⁺/K⁺ ATPase.",
            "Incorrect: Proton pumping is more relevant to lysosomes or mitochondria."
        ],
        slideLink: "Lecture 11 – Cell Membrane & Ion Transport"
    },
    {
        question: "Which of the following structures is primarily responsible for separating chromosomes during mitosis?",
        options: [
            "A) Microfilaments",
            "B) Intermediate filaments",
            "C) Microtubules",
            "D) Centrioles",
            "E) Peroxisomes"
        ],
        correctIndex: 2,
        explanations: [
            "Incorrect: Microfilaments are involved in cell shape and movement, not chromosome separation.",
            "Incorrect: Intermediate filaments provide structural support.",
            "Correct: Microtubules form the mitotic spindle, which separates chromosomes.",
            "Incorrect: Centrioles organize the spindle but don’t separate chromosomes directly.",
            "Incorrect: Peroxisomes are involved in fatty acid metabolism, not mitosis."
        ],
        slideLink: "Lecture 12 – Cytoskeleton"
    },
    {
        question: "A patient with chronic myeloid leukemia is being treated with imatinib. Which enzyme does this drug most specifically inhibit?",
        options: [
            "A) DNA polymerase",
            "B) RNA polymerase",
            "C) Tyrosine kinase",
            "D) Topoisomerase",
            "E) Caspase 9"
        ],
        correctIndex: 2,
        explanations: [
            "Incorrect: DNA polymerase is involved in replication, not the target of imatinib.",
            "Incorrect: RNA polymerase is involved in transcription.",
            "Correct: Imatinib specifically targets the BCR-ABL tyrosine kinase produced in CML.",
            "Incorrect: Topoisomerase inhibitors are used in other cancers, not CML.",
            "Incorrect: Caspase 9 is involved in apoptosis, not the drug's target."
        ],
        slideLink: "Lecture 24 – Cell Death and Cancer Therapy"
    },
	{
		  question: "Which of the following layers of the epidermis contains mitotically active keratinocytes?",
		  options: [
		    "A) Stratum corneum",
		    "B) Stratum lucidum",
		    "C) Stratum granulosum",
		    "D) Stratum spinosum",
		    "E) Stratum basale"
		  ],
		  correctIndex: 4,
		  explanations: [
		    "Incorrect: This is the outermost layer composed of dead cells.",
		    "Incorrect: This translucent layer is only found in thick skin.",
		    "Incorrect: This layer contains cells that begin keratinization, but are not mitotically active.",
		    "Incorrect: These cells are involved in protein production, not mitosis.",
		    "Correct: The stratum basale contains stem cells responsible for keratinocyte mitosis."
		  ],
		  slideLink: "Lecture 15 – Skin Strata"
		},
		{
		  question: "Which of the following macromolecules is the primary long-term energy storage molecule in humans?",
		  options: [
		    "A) Glycogen",
		    "B) ATP",
		    "C) Triglycerides",
		    "D) Proteins",
		    "E) DNA"
		  ],
		  correctIndex: 2,
		  explanations: [
		    "Incorrect: Glycogen stores short-term energy, primarily in the liver and muscles.",
		    "Incorrect: ATP is an energy carrier, not a storage form.",
		    "Correct: Triglycerides store large amounts of energy and are used for long-term energy reserves.",
		    "Incorrect: Proteins have many functions but are not energy storage molecules.",
		    "Incorrect: DNA stores genetic information, not energy."
		  ],
		  slideLink: "Lecture 10 – Macromolecules Part 1"
		},
		{
		  question: "Which of the following best exemplifies the ethical principle of 'autonomy' in clinical practice?",
		  options: [
		    "A) Treating everyone equally regardless of status",
		    "B) Acting in the patient's best interest regardless of their opinion",
		    "C) Allowing a patient to decline life-saving treatment",
		    "D) Reporting a colleague's error to protect patients",
		    "E) Preventing patients from making harmful decisions"
		  ],
		  correctIndex: 2,
		  explanations: [
		    "Incorrect: This reflects the principle of justice.",
		    "Incorrect: This aligns more with beneficence than autonomy.",
		    "Correct: Autonomy means respecting a patient’s right to make their own decisions, even if medically inadvisable.",
		    "Incorrect: This aligns with professional responsibility and possibly non-maleficence.",
		    "Incorrect: Autonomy includes the right to make choices that may carry risk."
		  ],
		  slideLink: "Lecture – Introducing Ethics (Slide: Four Principles)"
		},
		{
		  question: "During protein synthesis, which molecule delivers amino acids to the ribosome?",
		  options: [
		    "A) mRNA",
		    "B) rRNA",
		    "C) tRNA",
		    "D) DNA polymerase",
		    "E) snRNA"
		  ],
		  correctIndex: 2,
		  explanations: [
		    "Incorrect: mRNA contains the genetic code but does not carry amino acids.",
		    "Incorrect: rRNA is structural and catalytic but does not transport amino acids.",
		    "Correct: tRNA matches codons with amino acids during translation.",
		    "Incorrect: DNA polymerase is involved in DNA replication, not protein synthesis.",
		    "Incorrect: snRNA is involved in splicing, not translation."
		  ],
		  slideLink: "Lecture 19 – DNA Basics (Slide: tRNA function)"
		},
		{
		  question: "What property allows water to support hydrogen bonding between biological molecules?",
		  options: [
		    "A) High density",
		    "B) Amphipathicity",
		    "C) Polarity",
		    "D) Non-reactivity",
		    "E) Neutral pH"
		  ],
		  correctIndex: 2,
		  explanations: [
		    "Incorrect: Density is unrelated to hydrogen bonding ability.",
		    "Incorrect: Amphipathic molecules have both hydrophobic and hydrophilic regions, not water.",
		    "Correct: Water’s polarity makes it an excellent hydrogen bond donor and acceptor.",
		    "Incorrect: Water is chemically reactive in biological contexts.",
		    "Incorrect: pH neutrality does not affect hydrogen bonding."
		  ],
		  slideLink: "Lecture 10 – Macromolecules Part 1 (Slide: Hydrogen bonding)"
		},
		{
		  question: "A 50-year-old male presents with blistering of the skin after minor trauma. A biopsy reveals defective keratin. What is the most likely diagnosis?",
		  options: [
		    "A) Pemphigus vulgaris",
		    "B) Progeria",
		    "C) Epidermolysis bullosa simplex",
		    "D) Vitiligo",
		    "E) Basal cell carcinoma"
		  ],
		  correctIndex: 2,
		  explanations: [
		    "Incorrect: Pemphigus involves autoimmune attacks on desmosomes.",
		    "Incorrect: Progeria is linked to nuclear lamins, not keratin.",
		    "Correct: EBS is caused by mutations in keratin genes, making cells fragile.",
		    "Incorrect: Vitiligo is an autoimmune pigment disorder.",
		    "Incorrect: BCC is a skin cancer, not a blistering disorder."
		  ],
		  slideLink: "Lecture 12 – Cytoskeleton (Slide: Epidermolysis bullosa)"
		},
		{
		  question: "In osmosis, water moves toward which type of solution?",
		  options: [
		    "A) Hypotonic",
		    "B) Isotonic",
		    "C) Hypertonic",
		    "D) None, it stays still",
		    "E) The side with more water"
		  ],
		  correctIndex: 2,
		  explanations: [
		    "Incorrect: Water moves away from hypotonic solutions.",
		    "Incorrect: There is no net movement in isotonic solutions.",
		    "Correct: Water moves toward hypertonic (more solute) solutions to balance concentration.",
		    "Incorrect: Osmosis is active movement driven by gradients.",
		    "Incorrect: Movement is based on solute, not just water concentration."
		  ],
		  slideLink: "Lecture 11 – Cell Membrane & Ion Transport (Slide: Osmosis)"
		},
		{
		  question: "Which enzyme synthesizes DNA from an RNA template during reverse transcription?",
		  options: [
		    "A) DNA polymerase III",
		    "B) RNA polymerase",
		    "C) Reverse transcriptase",
		    "D) Ligase",
		    "E) Telomerase"
		  ],
		  correctIndex: 2,
		  explanations: [
		    "Incorrect: DNA pol III synthesizes DNA during normal replication.",
		    "Incorrect: RNA polymerase makes RNA, not DNA.",
		    "Correct: Reverse transcriptase copies RNA back into DNA.",
		    "Incorrect: Ligase joins DNA strands but does not synthesize them.",
		    "Incorrect: Telomerase adds telomere repeats using an RNA template, but is not a general reverse transcriptase."
		  ],
		  slideLink: "Lecture 19 – DNA Basics (Slide: Central Dogma exceptions)"
		},
		{
		  question: "Which of the following types of necrosis is most classically associated with hypoxic death of solid organs like the kidney or heart?",
		  options: [
		    "A) Liquefactive necrosis",
		    "B) Caseous necrosis",
		    "C) Fibrinoid necrosis",
		    "D) Fat necrosis",
		    "E) Coagulative necrosis"
		  ],
		  correctIndex: 4,
		  explanations: [
		    "Incorrect: Liquefactive is more common in brain ischemia.",
		    "Incorrect: Caseous is associated with TB, not hypoxia.",
		    "Incorrect: Fibrinoid is related to vasculitis and immune complexes.",
		    "Incorrect: Fat necrosis occurs in pancreatitis and trauma.",
		    "Correct: Coagulative necrosis preserves tissue architecture and is seen in heart and kidney ischemia."
		  ],
		  slideLink: "Lecture 24 – Cell Death (Slide: Types of necrosis)"
		},
		{
		  question: "Which of the following best explains the difference between facilitated diffusion and active transport?",
		  options: [
		    "A) Facilitated diffusion requires ATP",
		    "B) Active transport moves substances down their gradient",
		    "C) Facilitated diffusion moves substances against the gradient",
		    "D) Active transport requires energy, facilitated diffusion does not",
		    "E) They are the same"
		  ],
		  correctIndex: 3,
		  explanations: [
		    "Incorrect: Facilitated diffusion is passive.",
		    "Incorrect: Active transport moves substances *against* their gradient.",
		    "Incorrect: That describes active transport.",
		    "Correct: Active transport uses ATP to move substances against the gradient; facilitated diffusion uses carrier proteins but is passive.",
		    "Incorrect: They are fundamentally different mechanisms."
		  ],
		  slideLink: "Lecture 11 – Cell Membrane & Ion Transport (Slide: Carrier-mediated transport)"
		},
		{
  			question: "Which vitamin acts as a cofactor for hydroxylation of proline and lysine in collagen synthesis?",
  			options: [
            "A) Vitamin A",
            "B) Vitamin B6",
            "C) Vitamin C",
            "D) Vitamin D",
            "E) Vitamin K"
        ],
        correctIndex: 2,
        explanations: [
            "Incorrect: Vitamin A is involved in vision and epithelial cell maintenance.",
            "Incorrect: Vitamin B6 is involved in amino acid metabolism.",
            "Correct: Vitamin C is essential for hydroxylation reactions in collagen synthesis.",
            "Incorrect: Vitamin D is involved in calcium homeostasis.",
            "Incorrect: Vitamin K is essential for γ-carboxylation of clotting factors."
        ],
        slideLink: "Lecture – Macromolecules / Collagen structure"
    },
    {
        question: "Which type of RNA is directly involved in splicing of pre-mRNA?",
        options: [
            "A) mRNA",
            "B) tRNA",
            "C) rRNA",
            "D) snRNA",
            "E) miRNA"
        ],
        correctIndex: 3,
        explanations: [
            "Incorrect: mRNA is the product of splicing.",
            "Incorrect: tRNA is involved in translation.",
            "Incorrect: rRNA is structural and catalytic in ribosomes.",
            "Correct: snRNAs form part of the spliceosome that removes introns.",
            "Incorrect: miRNAs regulate gene expression post-transcriptionally."
        ],
        slideLink: "Lecture 19 – DNA Basics (Slide: RNA splicing)"
    },
    {
        question: "Which one of the following statements about action potentials is correct?",
        options: [
            "A) They are graded responses.",
            "B) They decay over distance.",
            "C) They can be summed.",
            "D) They involve voltage-gated channels.",
            "E) They do not require ion channels."
        ],
        correctIndex: 3,
        explanations: [
            "Incorrect: Action potentials are all-or-none, not graded.",
            "Incorrect: They are propagated without decrement.",
            "Incorrect: Summation occurs with graded potentials, not action potentials.",
            "Correct: Voltage-gated Na+ and K+ channels are critical in action potential generation.",
            "Incorrect: Ion channels are essential for generating the potential."
        ],
        slideLink: "Lecture 20 – Action Potentials (Slide: Voltage-gated channels)"
    },
    {
        question: "Which of the following processes is most directly impaired in a person with a genetic defect in actin polymerisation?",
        options: [
            "A) Formation of the mitotic spindle",
            "B) Transport of vesicles along microtubules",
            "C) Chromosome condensation",
            "D) Cell crawling and shape change",
            "E) Protein folding in the ER"
        ],
        correctIndex: 3,
        explanations: [
            "Incorrect: This is microtubule-dependent.",
            "Incorrect: Microtubules and motor proteins are responsible for vesicle transport.",
            "Incorrect: Chromosome condensation is regulated by histones and scaffolding proteins.",
            "Correct: Actin filaments drive movement and membrane protrusions in cell crawling.",
            "Incorrect: Protein folding in the ER is independent of the cytoskeleton."
        ],
        slideLink: "Lecture 12 – Cytoskeleton (Slide: Actin and Cell Movement)"
    },
    {
        "question": "In the resting membrane potential of neurons, which ion is primarily responsible for the negative internal charge?",
        "options": [
            "A) Sodium influx",
            "B) Potassium efflux",
            "C) Calcium influx",
            "D) Chloride efflux",
            "E) Magnesium retention"
        ],
        "correctIndex": 1,
        "explanations": [
            "Incorrect: Sodium typically accumulates extracellularly.",
            "Correct: Potassium leaves the cell through leak channels, making the interior negative.",
            "Incorrect: Calcium entry is minimal at rest and has other signaling roles.",
            "Incorrect: Chloride tends to enter the cell, not leave it.",
            "Incorrect: Magnesium has minimal influence on resting membrane potential."
        ],
        "slideLink": "Lecture – Resting Membrane Potential (Slide: K+ leak channels)"
    },
    {
        "question": "Which of the following molecules is the immediate source of energy used by ATP synthase to generate ATP?",
        "options": [
            "A) NADH",
            "B) Glucose",
            "C) A proton gradient",
            "D) GTP",
            "E) FADH2"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: NADH donates electrons earlier in the ETC.",
            "Incorrect: Glucose is metabolized into smaller energy carriers.",
            "Correct: The proton gradient across the mitochondrial membrane drives ATP production via chemiosmosis.",
            "Incorrect: GTP is used in specific reactions but not by ATP synthase.",
            "Incorrect: FADH2 also donates electrons but doesn’t directly power ATP synthase."
        ],
        "slideLink": "Lecture 22 – Enzymes, Krebs, ATP (Slide: Oxidative phosphorylation)"
    },
    {
        "question": "What is the primary function of the Na⁺/K⁺ ATPase in nerve cells?",
        "options": [
            "A) Depolarize the membrane during an action potential",
            "B) Maintain the resting membrane potential",
            "C) Facilitate neurotransmitter release",
            "D) Promote glucose uptake",
            "E) Generate reactive oxygen species"
        ],
        "correctIndex": 1,
        "explanations": [
            "Incorrect: Depolarization is due to Na⁺ influx through voltage-gated channels.",
            "Correct: The Na⁺/K⁺ ATPase maintains the resting membrane potential by pumping 3 Na⁺ out and 2 K⁺ in.",
            "Incorrect: Neurotransmitter release involves calcium influx at the synapse.",
            "Incorrect: Glucose uptake is mediated by transporters like GLUT.",
            "Incorrect: ROS generation is linked to mitochondrial activity, not ion pumps."
        ],
        "slideLink": "Lecture – Resting Membrane Potential (Slide: Na⁺/K⁺ ATPase)"
    },
    {
        "question": "Which layer of the epidermis contains the highest concentration of desmosomes?",
        "options": [
            "A) Stratum corneum",
            "B) Stratum lucidum",
            "C) Stratum granulosum",
            "D) Stratum spinosum",
            "E) Stratum basale"
        ],
        "correctIndex": 3,
        "explanations": [
            "Incorrect: This layer is composed of dead keratinized cells.",
            "Incorrect: Present only in thick skin and not a major site of desmosome concentration.",
            "Incorrect: This layer begins keratinization, but not maximal desmosomal density.",
            "Correct: The 'spiny' appearance of this layer comes from abundant desmosomal connections.",
            "Incorrect: This layer is primarily mitotic but has fewer desmosomes than spinosum."
        ],
        "slideLink": "Lecture 15 – Skin Strata (Slide: Desmosome Distribution)"
    },
    {
        "question": "In glycolysis, what is the net gain of ATP molecules per glucose molecule?",
        "options": [
            "A) 0",
            "B) 1",
            "C) 2",
            "D) 4",
            "E) 6"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: There is a net gain, not zero.",
            "Incorrect: Two are consumed and four are made, net is more than 1.",
            "Correct: Glycolysis yields a net gain of 2 ATP per glucose.",
            "Incorrect: Gross gain is 4, but 2 are used in early steps.",
            "Incorrect: This is an overestimate of ATP yield from glycolysis alone."
        ],
        "slideLink": "Lecture 22 – Enzymes, Krebs, ATP (Slide: Glycolysis Summary)"
    },
    {
        "question": "Which cytoskeletal element is most important for maintaining nuclear shape?",
        "options": [
            "A) Actin filaments",
            "B) Microtubules",
            "C) Intermediate filaments",
            "D) Collagen fibers",
            "E) Elastin"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: Actin is involved in movement and cell shape, not nuclear integrity.",
            "Incorrect: Microtubules are for transport and spindle formation.",
            "Correct: Intermediate filaments, particularly nuclear lamins, maintain nuclear structure.",
            "Incorrect: Collagen is extracellular, not cytoskeletal.",
            "Incorrect: Elastin is a connective tissue protein, not cytoskeletal."
        ],
        "slideLink": "Lecture 12 – Cytoskeleton (Slide: Nuclear Lamins)"
    },
    {
        "question": "Which statistical test is most appropriate for comparing the means of two independent groups?",
        "options": [
            "A) Chi-square test",
            "B) Paired t-test",
            "C) Independent t-test",
            "D) ANOVA",
            "E) Mann-Whitney U test"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: Chi-square is for categorical variables.",
            "Incorrect: Paired t-test is for repeated measures or matched pairs.",
            "Correct: Independent t-test compares means between two unrelated groups.",
            "Incorrect: ANOVA is used when comparing more than two groups.",
            "Incorrect: Mann-Whitney is non-parametric and used when data is not normally distributed."
        ],
        "slideLink": "Lecture – Introduction to Statistics (Slide: t-test comparison)"
    },
    {
        "question": "Which molecule is responsible for transporting fatty acids into the mitochondria for beta-oxidation?",
        "options": [
            "A) Carnitine",
            "B) Coenzyme A",
            "C) ATP",
            "D) Cytochrome C",
            "E) FAD"
        ],
        "correctIndex": 0,
        "explanations": [
            "Correct: Carnitine shuttles long-chain fatty acids into the mitochondrial matrix.",
            "Incorrect: Coenzyme A activates fatty acids but doesn't transport them across membranes.",
            "Incorrect: ATP provides energy but doesn't transport fatty acids.",
            "Incorrect: Cytochrome C is part of the electron transport chain.",
            "Incorrect: FAD is a redox coenzyme, not a transporter."
        ],
        "slideLink": "Lecture – Enzymes and Metabolism (Slide: Carnitine shuttle)"
    },
    {
        "question": "Which cellular structure is most affected in Kartagener’s syndrome?",
        "options": [
            "A) Rough endoplasmic reticulum",
            "B) Actin filaments",
            "C) Cilia",
            "D) Desmosomes",
            "E) Ribosomes"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: The rough ER is involved in protein synthesis, not motility.",
            "Incorrect: Actin filaments support cell shape and movement, but not ciliary motion.",
            "Correct: Kartagener’s syndrome involves defective dynein arms in cilia, causing immotility.",
            "Incorrect: Desmosomes are involved in adhesion, not movement.",
            "Incorrect: Ribosomes synthesize proteins, not move fluids."
        ],
        "slideLink": "Lecture 12 – Cytoskeleton (Slide: Ciliary motion)"
    },
    {
        "question": "Which part of the action potential is due to potassium efflux?",
        "options": [
            "A) Depolarization",
            "B) Threshold achievement",
            "C) Repolarization",
            "D) Resting state",
            "E) Refractory period"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: Depolarization is caused by Na+ influx.",
            "Incorrect: Threshold is reached by initial depolarizing currents.",
            "Correct: Repolarization is driven by the efflux of K+ ions through voltage-gated channels.",
            "Incorrect: Resting potential is maintained by Na+/K+ ATPase.",
            "Incorrect: The refractory period involves inactivation of Na+ channels, not just K+."
        ],
        "slideLink": "Lecture 20 – Action Potentials (Slide: Repolarization)"
    },
    {
        "question": "What is the role of topoisomerase during DNA replication?",
        "options": [
            "A) Adds RNA primers",
            "B) Joins Okazaki fragments",
            "C) Unwinds the double helix",
            "D) Relieves supercoiling ahead of the fork",
            "E) Synthesizes DNA strands"
        ],
        "correctIndex": 3,
        "explanations": [
            "Incorrect: Primase adds RNA primers.",
            "Incorrect: Ligase joins fragments, not topoisomerase.",
            "Incorrect: Helicase unwinds DNA.",
            "Correct: Topoisomerase prevents overwinding and tangling by relieving torsional stress.",
            "Incorrect: DNA polymerase synthesizes DNA."
        ],
        "slideLink": "Lecture 19 – DNA Basics (Slide: DNA replication)"
    },
    {
        "question": "Which principle of medical ethics is most associated with protecting patients from harm?",
        "options": [
            "A) Autonomy",
            "B) Justice",
            "C) Non-maleficence",
            "D) Beneficence",
            "E) Fidelity"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: Autonomy is about respecting patient choice.",
            "Incorrect: Justice is about fairness and equity.",
            "Correct: Non-maleficence means ‘do no harm’ and involves avoiding risk.",
            "Incorrect: Beneficence is acting for the patient's benefit, but not primarily about harm prevention.",
            "Incorrect: Fidelity refers to maintaining trust and confidentiality."
        ],
        "slideLink": "Lecture – Introducing Ethics (Slide: Four Principles)"
    },
    {
        "question": "Which cell junction is primarily responsible for preventing paracellular transport in epithelial layers?",
        "options": [
            "A) Desmosomes",
            "B) Gap junctions",
            "C) Tight junctions",
            "D) Hemidesmosomes",
            "E) Adherens junctions"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: Desmosomes provide mechanical strength, not a barrier.",
            "Incorrect: Gap junctions allow intercellular communication, not sealing.",
            "Correct: Tight junctions form a barrier to prevent leakage between epithelial cells.",
            "Incorrect: Hemidesmosomes anchor cells to the basement membrane.",
            "Incorrect: Adherens junctions help maintain tissue architecture but don’t prevent leakage."
        ],
        "slideLink": "Lecture – Cell Junctions (Slide: Tight Junctions)"
    },
    {
        "question": "What type of epithelium lines the alveoli of the lungs to facilitate gas exchange?",
        "options": [
            "A) Simple cuboidal",
            "B) Simple squamous",
            "C) Stratified squamous",
            "D) Pseudostratified columnar",
            "E) Transitional"
        ],
        "correctIndex": 1,
        "explanations": [
            "Incorrect: Found in ducts and glands, not suited for rapid diffusion.",
            "Correct: Simple squamous epithelium is thin, allowing efficient gas exchange.",
            "Incorrect: Stratified squamous protects against abrasion, found in skin or esophagus.",
            "Incorrect: Found in the respiratory tract, but not at the alveolar level.",
            "Incorrect: Transitional epithelium lines the urinary bladder, not lungs."
        ],
        "slideLink": "Lecture – Basic Concepts in Anatomy (Slide: Epithelial Types)"
    },
    {
        "question": "Which of the following is an example of a second messenger in signal transduction?",
        "options": [
            "A) Insulin",
            "B) Adenylate cyclase",
            "C) cAMP",
            "D) Receptor tyrosine kinase",
            "E) Protein kinase A"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: Insulin is the first messenger (hormone).",
            "Incorrect: Adenylate cyclase generates cAMP but is not the messenger itself.",
            "Correct: cAMP is a second messenger that propagates signals inside the cell.",
            "Incorrect: Receptor tyrosine kinases are membrane-bound receptors.",
            "Incorrect: Protein kinase A is activated by cAMP but is an effector enzyme."
        ],
        "slideLink": "Lecture – Cell Signaling (Slide: Second Messengers)"
    },
    {
        "question": "Which macromolecule is primarily digested in the stomach?",
        "options": [
            "A) Carbohydrates",
            "B) Proteins",
            "C) Lipids",
            "D) Nucleic acids",
            "E) Fiber"
        ],
        "correctIndex": 1,
        "explanations": [
            "Incorrect: Carbohydrate digestion begins in the mouth and continues in the small intestine.",
            "Correct: Protein digestion begins in the stomach via pepsin.",
            "Incorrect: Lipid digestion primarily occurs in the small intestine.",
            "Incorrect: Nucleic acids are digested by nucleases later in the digestive tract.",
            "Incorrect: Fiber is not enzymatically digested by humans."
        ],
        "slideLink": "Lecture – Macromolecules Part 2 (Slide: Digestion)"
    },
    {
        "question": "Which of the following bacteria is Gram-positive and forms grape-like clusters?",
        "options": [
            "A) Escherichia coli",
            "B) Streptococcus pyogenes",
            "C) Staphylococcus aureus",
            "D) Neisseria meningitidis",
            "E) Pseudomonas aeruginosa"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: E. coli is a Gram-negative rod.",
            "Incorrect: Streptococcus forms chains, not clusters.",
            "Correct: Staphylococcus aureus is Gram-positive and appears in clusters under microscopy.",
            "Incorrect: Neisseria is Gram-negative and diplococcal.",
            "Incorrect: Pseudomonas is Gram-negative and rod-shaped."
        ],
        "slideLink": "Lecture – Organisms and Infection (Slide: Gram Stain Morphology)"
    },
    {
        "question": "In the electron transport chain, which complex directly reduces oxygen to water?",
        "options": [
            "A) Complex I",
            "B) Complex II",
            "C) Complex III",
            "D) Complex IV",
            "E) ATP synthase"
        ],
        "correctIndex": 3,
        "explanations": [
            "Incorrect: Complex I transfers electrons from NADH to CoQ.",
            "Incorrect: Complex II accepts electrons from FADH2.",
            "Incorrect: Complex III transfers electrons from CoQ to cytochrome c.",
            "Correct: Complex IV (cytochrome c oxidase) reduces O2 to H2O.",
            "Incorrect: ATP synthase uses the proton gradient but does not reduce oxygen."
        ],
        "slideLink": "Lecture 22 – Enzymes, Krebs, ATP (Slide: ETC complexes)"
    },
    {
        "question": "What type of necrosis is most commonly observed in the brain following ischemic injury?",
        "options": [
            "A) Coagulative",
            "B) Caseous",
            "C) Fat",
            "D) Liquefactive",
            "E) Fibrinoid"
        ],
        "correctIndex": 3,
        "explanations": [
            "Incorrect: Coagulative necrosis is typical in solid organs like the heart.",
            "Incorrect: Caseous necrosis is seen in tuberculosis.",
            "Incorrect: Fat necrosis occurs in pancreas and trauma to fatty areas.",
            "Correct: Brain tissue undergoes liquefactive necrosis due to enzymatic digestion.",
            "Incorrect: Fibrinoid necrosis is immune-mediated, seen in vasculitis."
        ],
        "slideLink": "Lecture – Cell Injury and Death (Slide: Liquefactive Necrosis)"
    },
    {
        "question": "Which vitamin is essential for calcium absorption in the gut?",
        "options": [
            "A) Vitamin A",
            "B) Vitamin B12",
            "C) Vitamin C",
            "D) Vitamin D",
            "E) Vitamin K"
        ],
        "correctIndex": 3,
        "explanations": [
            "Incorrect: Vitamin A is important for vision and epithelial health.",
            "Incorrect: B12 is involved in DNA synthesis and neurological function.",
            "Incorrect: Vitamin C supports collagen formation and immune function.",
            "Correct: Vitamin D promotes calcium absorption in the intestines.",
            "Incorrect: Vitamin K is essential for blood clotting."
        ],
        "slideLink": "Lecture – Macromolecules and Physiology (Slide: Vitamins and Absorption)"
    },
    {
        "question": "Which of the following is the most accurate method for measuring central tendency in skewed data?",
        "options": [
            "A) Mean",
            "B) Mode",
            "C) Median",
            "D) Standard deviation",
            "E) Variance"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: Mean is distorted by extreme values.",
            "Incorrect: Mode may not reflect distribution accurately in continuous data.",
            "Correct: Median represents the central value and is less affected by outliers.",
            "Incorrect: Standard deviation measures spread, not central tendency.",
            "Incorrect: Variance also measures dispersion, not the center."
        ],
        "slideLink": "Lecture – Introduction to Statistics (Slide: Measures of Central Tendency)"
    },
    {
        "question": "Which structure in the kidney is primarily responsible for filtration of blood?",
        "options": [
            "A) Loop of Henle",
            "B) Distal convoluted tubule",
            "C) Glomerulus",
            "D) Collecting duct",
            "E) Renal pelvis"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: The Loop of Henle concentrates urine but doesn’t filter blood.",
            "Incorrect: The distal tubule modifies filtrate but doesn't perform filtration.",
            "Correct: The glomerulus is a capillary tuft that filters plasma into Bowman’s capsule.",
            "Incorrect: The collecting duct reabsorbs water and urea.",
            "Incorrect: The renal pelvis collects urine, not filtrate."
        ],
        "slideLink": "Lecture – Basic Concepts in Anatomy (Slide: Nephron structure)"
    },
    {
        "question": "Which of the following metabolic conditions is commonly detected through newborn screening and managed with dietary restriction?",
        "options": [
            "A) Cystic fibrosis",
            "B) Type 1 diabetes",
            "C) Phenylketonuria (PKU)",
            "D) Haemophilia A",
            "E) Turner syndrome"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: CF is screened for but managed with respiratory and nutritional support.",
            "Incorrect: Type 1 diabetes is not part of newborn screening.",
            "Correct: PKU is a metabolic disorder treated with a low-phenylalanine diet.",
            "Incorrect: Haemophilia is genetic but not managed via dietary restriction.",
            "Incorrect: Turner syndrome is a chromosomal disorder."
        ],
        "slideLink": "Clinical Biochemistry – The Patient Perspective (Slide: PKU)"
    },
    {
        "question": "What is the primary mechanism of action of beta-lactam antibiotics?",
        "options": [
            "A) Inhibition of protein synthesis",
            "B) Disruption of cell membrane integrity",
            "C) Inhibition of DNA gyrase",
            "D) Inhibition of peptidoglycan cross-linking",
            "E) Blocking folate synthesis"
        ],
        "correctIndex": 3,
        "explanations": [
            "Incorrect: This is the mechanism of macrolides and aminoglycosides.",
            "Incorrect: This is how polymyxins work.",
            "Incorrect: Fluoroquinolones inhibit DNA gyrase.",
            "Correct: Beta-lactams prevent cross-linking of bacterial cell walls.",
            "Incorrect: Sulfonamides block folate synthesis."
        ],
        "slideLink": "Preventing and Managing Infection 2 (Slide: Beta-lactam antibiotics)"
    },
    {
        "question": "Which type of receptor is directly linked to gene transcription regulation upon ligand binding?",
        "options": [
            "A) GPCR",
            "B) Enzyme-linked receptor",
            "C) Ligand-gated ion channel",
            "D) Nuclear receptor",
            "E) Toll-like receptor"
        ],
        "correctIndex": 3,
        "explanations": [
            "Incorrect: GPCRs activate second messengers.",
            "Incorrect: Enzyme-linked receptors activate cascades but not direct transcription.",
            "Incorrect: Ion channels mediate rapid responses, not transcription.",
            "Correct: Nuclear receptors directly affect gene expression.",
            "Incorrect: Toll-like receptors activate immune signalling, not transcription directly."
        ],
        "slideLink": "Receptor-Effector Coupling (Slide: Superfamily 4 nuclear receptors)"
    },
    {
        "question": "Which muscle type contains cells with centrally placed nuclei and intercalated discs?",
        "options": [
            "A) Skeletal muscle",
            "B) Smooth muscle",
            "C) Cardiac muscle",
            "D) Voluntary muscle",
            "E) White muscle fibres"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: Skeletal muscle has peripheral nuclei.",
            "Incorrect: Smooth muscle is not striated and lacks intercalated discs.",
            "Correct: Cardiac muscle cells are striated, branched, and connected by intercalated discs.",
            "Incorrect: Voluntary muscle usually refers to skeletal muscle.",
            "Incorrect: White muscle fibres refer to fast-twitch skeletal muscle."
        ],
        "slideLink": "Tissue Types – Muscle (Slide: Cardiac Muscle Histology)"
    },
    {
        "question": "Which second messenger is most directly responsible for smooth muscle relaxation mediated by β2-adrenoceptor agonists?",
        "options": [
            "A) IP3",
            "B) DAG",
            "C) cAMP",
            "D) cGMP",
            "E) Calcium"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: IP3 increases intracellular calcium.",
            "Incorrect: DAG activates PKC.",
            "Correct: β2 stimulation increases cAMP which relaxes smooth muscle.",
            "Incorrect: cGMP is more associated with NO-mediated vasodilation.",
            "Incorrect: Calcium promotes contraction, not relaxation."
        ],
        "slideLink": "Receptor-Effector Coupling (Slide: β2-adrenoceptor signalling)"
    },
    {
        "question": "Which of the following vaccines contains live attenuated virus?",
        "options": [
            "A) Hepatitis B",
            "B) Polio (IPV)",
            "C) MMR",
            "D) Influenza (injected)",
            "E) HPV"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: Hepatitis B is a recombinant subunit vaccine.",
            "Incorrect: IPV (inactivated polio vaccine) contains killed virus.",
            "Correct: MMR contains live attenuated measles, mumps, and rubella viruses.",
            "Incorrect: The injected flu vaccine is inactivated.",
            "Incorrect: HPV vaccines are recombinant subunit types."
        ],
        "slideLink": "Vaccine Immunology (Slide: Current human viral vaccines)"
    },
    {
        "question": "Which molecule acts as a second messenger in the phosphoinositide signalling pathway?",
        "options": [
            "A) ATP",
            "B) GTP",
            "C) DAG",
            "D) NADH",
            "E) cAMP"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: ATP is the substrate but not the second messenger.",
            "Incorrect: GTP activates G-proteins but is not the messenger itself.",
            "Correct: Diacylglycerol (DAG) activates protein kinase C as a second messenger.",
            "Incorrect: NADH is involved in redox reactions, not signalling.",
            "Incorrect: cAMP is a second messenger but for a different pathway."
        ],
        "slideLink": "Receptor-Effector Coupling (Slide: DAG function)"
    },
    {
        "question": "What is the major mechanism by which familial hypercholesterolaemia (FH) increases blood LDL levels?",
        "options": [
            "A) Increased dietary fat absorption",
            "B) Impaired bile acid synthesis",
            "C) Defective LDL receptors",
            "D) Excess triglyceride synthesis",
            "E) Overproduction of HDL"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: FH is a genetic disorder, not diet-induced.",
            "Incorrect: Bile acid synthesis impairment leads to fat malabsorption, not high LDL.",
            "Correct: FH is most commonly due to LDL receptor mutations.",
            "Incorrect: Triglycerides are not the main lipid affected.",
            "Incorrect: HDL is protective and low in many at-risk individuals."
        ],
        "slideLink": "Clinical Biochemistry – The Patient Perspective (Slide: FH mechanism)"
    },
    {
        "question": "What is the main function of the phosphodiesterase enzyme in signal transduction?",
        "options": [
            "A) Activate G-proteins",
            "B) Synthesize cAMP",
            "C) Degrade cyclic AMP",
            "D) Activate adenylate cyclase",
            "E) Release calcium from stores"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: G-protein activation occurs upstream.",
            "Incorrect: Adenylate cyclase synthesizes cAMP.",
            "Correct: Phosphodiesterase breaks down cAMP into AMP.",
            "Incorrect: It deactivates, not activates, cAMP pathways.",
            "Incorrect: IP3, not PDE, triggers calcium release."
        ],
        "slideLink": "Receptor-Effector Coupling (Slide: Termination of cAMP signalling)"
    },
    {
        "question": "What is the purpose of perioperative prophylactic antimicrobials?",
        "options": [
            "A) Treat known infection",
            "B) Eliminate normal flora",
            "C) Prevent surgical site infection",
            "D) Reduce antibiotic resistance",
            "E) Prevent viral reactivation"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: Prophylaxis is preventative, not therapeutic.",
            "Incorrect: Eliminating normal flora may increase infection risk.",
            "Correct: Administered pre-surgery to prevent postoperative infections.",
            "Incorrect: Overuse can increase resistance if not targeted.",
            "Incorrect: This is more relevant in immunosuppressed patients."
        ],
        "slideLink": "Preventing and Managing Infection 2 (Slide: Perioperative antibiotics)"
    },
    {
        "question": "Which of the following best describes the mechanism of action of trastuzumab (Herceptin)?",
        "options": [
            "A) Inhibits DNA replication",
            "B) Blocks HER2 receptor tyrosine kinase",
            "C) Inhibits microtubule formation",
            "D) Acts as a β-blocker",
            "E) Stimulates dopamine receptors"
        ],
        "correctIndex": 1,
        "explanations": [
            "Incorrect: This is the mechanism of some chemotherapy agents like cisplatin.",
            "Correct: Trastuzumab is a monoclonal antibody that targets HER2 receptor tyrosine kinase.",
            "Incorrect: Microtubule inhibitors include taxanes, not trastuzumab.",
            "Incorrect: β-blockers reduce heart rate and contractility, unrelated here.",
            "Incorrect: Dopamine stimulation is unrelated to HER2-positive breast cancer."
        ],
        "slideLink": "Receptor-Effector Coupling (Slide: Drugs targeting tyrosine kinase-linked receptors)"
    },
    {
        "question": "Which of the following is a major risk of poor dietary compliance in a patient with phenylketonuria (PKU)?",
        "options": [
            "A) Liver failure",
            "B) Hypertension",
            "C) Intellectual disability",
            "D) Hypercalcaemia",
            "E) Nephrotic syndrome"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: Liver is not the main organ affected in PKU.",
            "Incorrect: PKU doesn’t commonly affect blood pressure.",
            "Correct: High levels of phenylalanine are toxic to brain development.",
            "Incorrect: Calcium metabolism is unaffected in PKU.",
            "Incorrect: Nephrotic syndrome is unrelated to phenylalanine."
        ],
        "slideLink": "Clinical Biochemistry – The Patient Perspective (Slide: PKU outcomes)"
    },
    {
        "question": "What receptor superfamily do steroid hormone receptors belong to?",
        "options": [
            "A) Ion channel-linked",
            "B) G-protein-coupled",
            "C) Enzyme-linked",
            "D) Nuclear receptors",
            "E) Tyrosine kinase receptors"
        ],
        "correctIndex": 3,
        "explanations": [
            "Incorrect: Ion channels mediate fast electrical signals.",
            "Incorrect: GPCRs mediate second messenger systems, not gene regulation.",
            "Incorrect: Enzyme-linked are surface receptors like insulin.",
            "Correct: Steroid hormones bind intracellular nuclear receptors affecting gene transcription.",
            "Incorrect: TK receptors are membrane-bound and enzyme-linked."
        ],
        "slideLink": "Receptor-Effector Coupling (Slide: Superfamily 4 nuclear receptors)"
    },
    {
        "question": "Which receptor mediates smooth muscle contraction via the IP3 pathway?",
        "options": [
            "A) β2-adrenoceptor",
            "B) α1-adrenoceptor",
            "C) Muscarinic M2 receptor",
            "D) Dopamine D2 receptor",
            "E) Nicotinic acetylcholine receptor"
        ],
        "correctIndex": 1,
        "explanations": [
            "Incorrect: β2 receptors mediate relaxation via cAMP.",
            "Correct: α1 receptors activate Gq proteins, leading to IP3-mediated calcium release.",
            "Incorrect: M2 receptors reduce cAMP and heart rate, not contraction.",
            "Incorrect: D2 receptors inhibit cAMP via Gi proteins.",
            "Incorrect: Nicotinic receptors are ligand-gated ion channels, not GPCRs."
        ],
        "slideLink": "Receptor-Effector Coupling (Slide: PLC-β signalling and smooth muscle)"
    },
    {
        "question": "Which of the following is a typical adverse effect of smallpox vaccination?",
        "options": [
            "A) Eczema vaccinatum",
            "B) Diabetes mellitus",
            "C) Guillain-Barré syndrome",
            "D) Anaphylaxis to penicillin",
            "E) Pernicious anaemia"
        ],
        "correctIndex": 0,
        "explanations": [
            "Correct: Eczema vaccinatum is a rare but serious reaction to vaccinia virus in eczema patients.",
            "Incorrect: Not associated with vaccination.",
            "Incorrect: Rare with influenza, not smallpox vaccine.",
            "Incorrect: This is an antibiotic-related allergy.",
            "Incorrect: This is related to vitamin B12 deficiency."
        ],
        "slideLink": "Vaccine Immunology (Slide: Adverse events – vaccinia virus)"
    },
    {
        "question": "Which class of receptor does the insulin receptor belong to?",
        "options": [
            "A) GPCR",
            "B) Ion channel",
            "C) Tyrosine kinase receptor",
            "D) Nuclear receptor",
            "E) Ligand-gated calcium channel"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: GPCRs involve G-proteins and second messengers, not insulin.",
            "Incorrect: Ion channels don’t mediate insulin action.",
            "Correct: Insulin binds to tyrosine kinase receptors causing autophosphorylation.",
            "Incorrect: Nuclear receptors bind steroid hormones, not insulin.",
            "Incorrect: Calcium channels do not mediate insulin signalling."
        ],
        "slideLink": "Receptor-Effector Coupling (Slide: Superfamily 3 – insulin receptor)"
    },
    {
        "question": "What is the primary site of action for beta-lactam antibiotics?",
        "options": [
            "A) DNA replication machinery",
            "B) Ribosomal RNA",
            "C) Cell wall synthesis",
            "D) RNA polymerase",
            "E) Peptidase enzymes"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: Not involved in beta-lactam action.",
            "Incorrect: Protein synthesis inhibitors target ribosomes.",
            "Correct: Beta-lactams block peptidoglycan cross-linking in bacterial cell walls.",
            "Incorrect: RNA polymerase is targeted by rifampicin.",
            "Incorrect: Peptidases are not targeted by beta-lactams."
        ],
        "slideLink": "Preventing and Managing Infection 2 (Slide: Beta-lactam MOA)"
    },
    {
        "question": "Which vitamin deficiency is associated with homocystinuria due to CBS deficiency?",
        "options": [
            "A) Vitamin C",
            "B) Pyridoxine (B6)",
            "C) Vitamin D",
            "D) Biotin",
            "E) Thiamine"
        ],
        "correctIndex": 1,
        "explanations": [
            "Incorrect: Vitamin C is not linked to homocystinuria.",
            "Correct: Some forms of CBS deficiency respond to pyridoxine.",
            "Incorrect: Vitamin D is unrelated to this condition.",
            "Incorrect: Biotin deficiency causes a different metabolic disorder.",
            "Incorrect: Thiamine is not involved in methionine metabolism."
        ],
        "slideLink": "Clinical Biochemistry – The Patient Perspective (Slide: Homocystinuria management)"
    },
    {
        "question": "Which of the following contributes to antimicrobial resistance development?",
        "options": [
            "A) High-dose antibiotics for appropriate duration",
            "B) Strict vaccine schedules",
            "C) Sub-lethal antibiotic exposure",
            "D) Proper source control",
            "E) Narrow spectrum therapy"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: Proper dosing reduces resistance.",
            "Incorrect: Vaccines help prevent misuse of antibiotics.",
            "Correct: Sub-lethal exposure promotes resistance gene selection.",
            "Incorrect: Source control helps eliminate infection.",
            "Incorrect: Narrow spectrum reduces resistance risk."
        ],
        "slideLink": "Preventing and Managing Infection 2 (Slide: Resistance mechanisms)"
    },
    {
        "question": "Which of the following best defines 'source control' in infection management?",
        "options": [
            "A) Prescribing broad-spectrum antibiotics",
            "B) Performing incision and drainage of abscess",
            "C) Giving vaccine boosters",
            "D) Isolating the patient",
            "E) Measuring blood cultures"
        ],
        "correctIndex": 1,
        "explanations": [
            "Incorrect: Antibiotics may not work without source control.",
            "Correct: Removing infected material (e.g. abscess) is source control.",
            "Incorrect: Vaccines prevent disease, not treat it.",
            "Incorrect: Isolation prevents spread, not treats infection.",
            "Incorrect: Diagnostics don’t constitute source control."
        ],
        "slideLink": "Preventing and Managing Infection 2 (Slide: Abscess drainage)"
    },
    {
        "question": "Which second messenger pathway is stimulated by nitric oxide (NO) in vascular smooth muscle?",
        "options": [
            "A) cAMP",
            "B) IP3/DAG",
            "C) cGMP",
            "D) Calcium influx",
            "E) Tyrosine kinase"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: cAMP is stimulated by GPCRs like β2-adrenoceptors.",
            "Incorrect: IP3/DAG is activated by Gq-coupled receptors.",
            "Correct: NO stimulates guanylate cyclase to produce cGMP, leading to vasodilation.",
            "Incorrect: NO indirectly affects calcium, but not via direct influx.",
            "Incorrect: Tyrosine kinase is a different receptor family."
        ],
        "slideLink": "Receptor-Effector Coupling (Slide: cGMP signalling pathway)"
    },
    {
        "question": "Which structure is shared between skeletal and cardiac muscle but absent in smooth muscle?",
        "options": [
            "A) Sarcomeres",
            "B) Actin and myosin",
            "C) Mitochondria",
            "D) Plasma membrane",
            "E) Nucleus"
        ],
        "correctIndex": 0,
        "explanations": [
            "Correct: Sarcomeres are the contractile units in striated muscle.",
            "Incorrect: All muscle types contain actin and myosin.",
            "Incorrect: All muscle types have mitochondria.",
            "Incorrect: All cells have plasma membranes.",
            "Incorrect: All muscle types are nucleated."
        ],
        "slideLink": "Tissue Types – Muscle (Slide: Muscle histology)"
    },
    {
        "question": "Which of the following is true about medium chain acyl-CoA dehydrogenase deficiency (MCADD)?",
        "options": [
            "A) It causes hypoglycaemia during prolonged fasting",
            "B) It is an X-linked recessive condition",
            "C) It is diagnosed by liver biopsy",
            "D) It results in increased glucose production",
            "E) It improves with high protein intake"
        ],
        "correctIndex": 0,
        "explanations": [
            "Correct: MCADD prevents use of fatty acids during fasting, leading to hypoglycaemia.",
            "Incorrect: MCADD is autosomal recessive.",
            "Incorrect: Diagnosis is via acylcarnitine profile, not biopsy.",
            "Incorrect: It impairs gluconeogenesis.",
            "Incorrect: Management focuses on avoiding fasting, not protein intake."
        ],
        "slideLink": "Clinical Biochemistry – The Patient Perspective (Slide: MCADD)"
    },
    {
        "question": "Which immunoglobulin class is primarily found in mucosal secretions and provides first-line defence?",
        "options": [
            "A) IgG",
            "B) IgE",
            "C) IgM",
            "D) IgD",
            "E) IgA"
        ],
        "correctIndex": 4,
        "explanations": [
            "Incorrect: IgG is the most abundant in serum.",
            "Incorrect: IgE mediates allergy and parasitic infections.",
            "Incorrect: IgM is the first produced during infection but stays in blood.",
            "Incorrect: IgD is found on immature B cells.",
            "Correct: IgA is secreted at mucosal surfaces (e.g. gut, lungs)."
        ],
        "slideLink": "Immunology Lecture (Slide: Immunoglobulin types)"
    },
    {
        "question": "Which infection control measure directly targets 'source control' of infection?",
        "options": [
            "A) Use of gloves",
            "B) Masking patients",
            "C) Removal of infected catheter",
            "D) Hand washing",
            "E) Giving broad-spectrum antibiotics"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: Gloves prevent transmission, not source control.",
            "Incorrect: Masks reduce droplet spread.",
            "Correct: Removing infected hardware directly controls the source.",
            "Incorrect: Hand hygiene prevents spread, not source.",
            "Incorrect: Antibiotics may help but don’t remove the source."
        ],
        "slideLink": "Preventing and Managing Infection 2 (Slide: Biofilm and devices)"
    },
    {
        "question": "Which hormone binds to an intracellular nuclear receptor to modulate gene expression?",
        "options": [
            "A) Adrenaline",
            "B) Insulin",
            "C) Cortisol",
            "D) Glucagon",
            "E) Acetylcholine"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: Adrenaline acts via β-adrenergic GPCRs.",
            "Incorrect: Insulin uses tyrosine kinase receptors.",
            "Correct: Cortisol binds cytosolic receptors that translocate to the nucleus.",
            "Incorrect: Glucagon acts via GPCRs and cAMP.",
            "Incorrect: Acetylcholine acts via nicotinic/muscarinic receptors."
        ],
        "slideLink": "Receptor-Effector Coupling (Slide: Superfamily 4 – steroid hormones)"
    },
    {
        "question": "Which antimicrobial strategy most reduces development of resistance?",
        "options": [
            "A) Prolonged therapy with multiple agents",
            "B) Empirical broad-spectrum therapy for all infections",
            "C) Narrow spectrum therapy based on culture results",
            "D) Routine prophylactic antibiotics for viral illness",
            "E) Ignoring local resistance patterns"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: This increases selective pressure.",
            "Incorrect: Broad-spectrum use can promote resistance.",
            "Correct: Culture-based targeted therapy minimizes ecological disruption.",
            "Incorrect: Antibiotics are ineffective against viruses.",
            "Incorrect: Resistance patterns help guide appropriate use."
        ],
        "slideLink": "Preventing and Managing Infection 2 (Slide: Narrow vs broad spectrum)"
    },
    {
        "question": "Which organelle plays a major role in detoxifying drugs and synthesizing lipids?",
        "options": [
            "A) Nucleus",
            "B) Golgi apparatus",
            "C) Smooth endoplasmic reticulum",
            "D) Rough endoplasmic reticulum",
            "E) Lysosome"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: Nucleus stores genetic material.",
            "Incorrect: Golgi modifies and packages proteins.",
            "Correct: Smooth ER handles detoxification and lipid metabolism.",
            "Incorrect: Rough ER is involved in protein synthesis.",
            "Incorrect: Lysosomes degrade cellular waste."
        ],
        "slideLink": "Amino Acids and Metabolism (Slide: ER functions)"
    },
    {
        "question": "Which immune cell type is primarily responsible for presenting antigen to naïve T-cells?",
        "options": [
            "A) Neutrophil",
            "B) B lymphocyte",
            "C) Dendritic cell",
            "D) Macrophage",
            "E) Natural killer cell"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: Neutrophils are phagocytes, not APCs.",
            "Incorrect: B cells present antigens but are not primary APCs.",
            "Correct: Dendritic cells are professional antigen-presenting cells.",
            "Incorrect: Macrophages present antigens to memory T-cells, not naïve.",
            "Incorrect: NK cells destroy infected cells directly."
        ],
        "slideLink": "Immunology Lecture (Slide: Dendritic cells and antigen presentation)"
    },
    {
        "question": "In which location does the urea cycle primarily occur?",
        "options": [
            "A) Kidney cortex",
            "B) Liver mitochondria and cytosol",
            "C) Pancreatic acinar cells",
            "D) Red blood cells",
            "E) Intestinal villi"
        ],
        "correctIndex": 1,
        "explanations": [
            "Incorrect: The kidney excretes urea but doesn’t produce it.",
            "Correct: The urea cycle takes place in both mitochondrial and cytosolic compartments of hepatocytes.",
            "Incorrect: The pancreas secretes enzymes, not urea.",
            "Incorrect: RBCs lack mitochondria.",
            "Incorrect: The intestine absorbs amino acids but doesn’t process urea."
        ],
        "slideLink": "Amino Acids and Metabolism (Slide: Urea cycle)"
    },
    {
        "question": "Which hormone binds to an intracellular nuclear receptor to modulate gene expression?",
        "options": [
            "A) Adrenaline",
            "B) Insulin",
            "C) Cortisol",
            "D) Glucagon",
            "E) Acetylcholine"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: Adrenaline acts via β-adrenergic GPCRs.",
            "Incorrect: Insulin uses tyrosine kinase receptors.",
            "Correct: Cortisol binds cytosolic receptors that translocate to the nucleus.",
            "Incorrect: Glucagon acts via GPCRs and cAMP.",
            "Incorrect: Acetylcholine acts via nicotinic/muscarinic receptors."
        ],
        "slideLink": "Receptor-Effector Coupling (Slide: Superfamily 4 – steroid hormones)"
    },
    {
        "question": "Which antimicrobial strategy most reduces development of resistance?",
        "options": [
            "A) Prolonged therapy with multiple agents",
            "B) Empirical broad-spectrum therapy for all infections",
            "C) Narrow spectrum therapy based on culture results",
            "D) Routine prophylactic antibiotics for viral illness",
            "E) Ignoring local resistance patterns"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: This increases selective pressure.",
            "Incorrect: Broad-spectrum use can promote resistance.",
            "Correct: Culture-based targeted therapy minimizes ecological disruption.",
            "Incorrect: Antibiotics are ineffective against viruses.",
            "Incorrect: Resistance patterns help guide appropriate use."
        ],
        "slideLink": "Preventing and Managing Infection 2 (Slide: Narrow vs broad spectrum)"
    },
    {
        "question": "Which organelle plays a major role in detoxifying drugs and synthesizing lipids?",
        "options": [
            "A) Nucleus",
            "B) Golgi apparatus",
            "C) Smooth endoplasmic reticulum",
            "D) Rough endoplasmic reticulum",
            "E) Lysosome"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: Nucleus stores genetic material.",
            "Incorrect: Golgi modifies and packages proteins.",
            "Correct: Smooth ER handles detoxification and lipid metabolism.",
            "Incorrect: Rough ER is involved in protein synthesis.",
            "Incorrect: Lysosomes degrade cellular waste."
        ],
        "slideLink": "Amino Acids and Metabolism (Slide: ER functions)"
    },
    {
        "question": "Which immune cell type is primarily responsible for presenting antigen to naïve T-cells?",
        "options": [
            "A) Neutrophil",
            "B) B lymphocyte",
            "C) Dendritic cell",
            "D) Macrophage",
            "E) Natural killer cell"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: Neutrophils are phagocytes, not APCs.",
            "Incorrect: B cells present antigens but are not primary APCs.",
            "Correct: Dendritic cells are professional antigen-presenting cells.",
            "Incorrect: Macrophages present antigens to memory T-cells, not naïve.",
            "Incorrect: NK cells destroy infected cells directly."
        ],
        "slideLink": "Immunology Lecture (Slide: Dendritic cells and antigen presentation)"
    },
    {
        "question": "In which location does the urea cycle primarily occur?",
        "options": [
            "A) Kidney cortex",
            "B) Liver mitochondria and cytosol",
            "C) Pancreatic acinar cells",
            "D) Red blood cells",
            "E) Intestinal villi"
        ],
        "correctIndex": 1,
        "explanations": [
            "Incorrect: The kidney excretes urea but doesn’t produce it.",
            "Correct: The urea cycle takes place in both mitochondrial and cytosolic compartments of hepatocytes.",
            "Incorrect: The pancreas secretes enzymes, not urea.",
            "Incorrect: RBCs lack mitochondria.",
            "Incorrect: The intestine absorbs amino acids but doesn’t process urea."
        ],
        "slideLink": "Amino Acids and Metabolism (Slide: Urea cycle)"
    },
    {
        "question": "What is the most appropriate reason to avoid antibiotics in viral infections?",
        "options": [
            "A) Viral infections are always mild",
            "B) Antibiotics are too expensive",
            "C) Antibiotics do not target viruses and promote resistance",
            "D) Antibiotics increase immunity to viruses",
            "E) Viral infections require antifungal drugs"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: Viral infections can be severe but not treated with antibiotics.",
            "Incorrect: Cost is not the main concern; effectiveness is.",
            "Correct: Antibiotics are ineffective against viruses and misuse fosters resistance.",
            "Incorrect: Antibiotics have no role in enhancing viral immunity.",
            "Incorrect: Antifungals treat fungi, not viruses."
        ],
        "slideLink": "Preventing and Managing Infection 2 (Slide: Why not to prescribe)"
    },
    {
        "question": "Which of the following best describes the role of Protein Kinase A (PKA) in signalling?",
        "options": [
            "A) Degrades cAMP",
            "B) Opens ion channels",
            "C) Phosphorylates target proteins upon activation by cAMP",
            "D) Hydrolyzes ATP into ADP",
            "E) Activates phospholipase C"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: Phosphodiesterase degrades cAMP.",
            "Incorrect: PKA does not directly open ion channels.",
            "Correct: PKA is activated by cAMP and phosphorylates specific target proteins.",
            "Incorrect: ATP hydrolysis is not its primary function.",
            "Incorrect: PLC is activated by Gq proteins, not PKA."
        ],
        "slideLink": "Receptor-Effector Coupling (Slide: cAMP and PKA)"
    },
    {
        "question": "What is the main function of the smooth endoplasmic reticulum in hepatocytes?",
        "options": [
            "A) Protein translation",
            "B) Packaging proteins for secretion",
            "C) Lipid synthesis and detoxification",
            "D) DNA replication",
            "E) Cytoskeletal organization"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: Translation occurs on rough ER.",
            "Incorrect: Packaging is a Golgi function.",
            "Correct: Smooth ER is key for lipid synthesis and detoxification.",
            "Incorrect: DNA replication occurs in the nucleus.",
            "Incorrect: Cytoskeleton is composed of actin, tubulin, etc."
        ],
        "slideLink": "Amino Acids and Metabolism (Slide: Liver cell functions)"
    },
    {
        "question": "What does the term 'positive inotropy' refer to in cardiovascular pharmacology?",
        "options": [
            "A) Decrease in heart rate",
            "B) Increase in myocardial contractility",
            "C) Decrease in systemic vascular resistance",
            "D) Increase in blood volume",
            "E) Vasodilation of coronary arteries"
        ],
        "correctIndex": 1,
        "explanations": [
            "Incorrect: That describes a negative chronotropic effect.",
            "Correct: Positive inotropy refers to increased force of contraction.",
            "Incorrect: That describes afterload reduction.",
            "Incorrect: This is a preload effect.",
            "Incorrect: Vasodilation improves perfusion but isn’t inotropy."
        ],
        "slideLink": "Receptor-Effector Coupling (Slide: β1 agonists – dobutamine)"
    },
    {
        "question": "What genetic pattern does haemophilia A most commonly follow?",
        "options": [
            "A) Autosomal dominant",
            "B) Autosomal recessive",
            "C) X-linked recessive",
            "D) X-linked dominant",
            "E) Mitochondrial"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: Haemophilia A is not autosomal.",
            "Incorrect: Autosomal inheritance affects both sexes equally.",
            "Correct: Haemophilia A is X-linked recessive, affecting mostly males.",
            "Incorrect: Dominant X-linked disorders are rare and affect both sexes.",
            "Incorrect: Mitochondrial conditions are maternally inherited."
        ],
        "slideLink": "Inheritance Disorders Lecture (Slide: X-linked patterns)"
    },
    {
        "question": "Which process best describes the role of CREB (cAMP Response Element-Binding Protein) in cellular signalling?",
        "options": [
            "A) Calcium buffering",
            "B) Glucose transport",
            "C) Gene transcription activation",
            "D) Protein degradation",
            "E) Cell apoptosis"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: CREB is not a calcium-binding protein.",
            "Incorrect: CREB is not involved in glucose transport.",
            "Correct: CREB is a transcription factor activated by PKA (Protein Kinase A) phosphorylation.",
            "Incorrect: Protein degradation involves proteasomes.",
            "Incorrect: CREB regulates growth and survival, not apoptosis directly."
        ],
        "slideLink": "Receptor-Effector Coupling (Slide: CREB activation by PKA)"
    },
    {
        "question": "What causes scurvy at the molecular level?",
        "options": [
            "A) Deficiency of vitamin K",
            "B) Lack of hydroxylation of proline/lysine in collagen",
            "C) Reduced ATP production",
            "D) Inhibition of DNA replication",
            "E) Increased uric acid levels"
        ],
        "correctIndex": 1,
        "explanations": [
            "Incorrect: Vitamin K is involved in coagulation.",
            "Correct: Vitamin C deficiency impairs collagen hydroxylation, weakening connective tissue.",
            "Incorrect: ATP production is unrelated to scurvy.",
            "Incorrect: DNA replication continues normally in scurvy.",
            "Incorrect: Uric acid is linked to gout, not scurvy."
        ],
        "slideLink": "ECM Part 1 (Slide: Vitamin C and collagen synthesis)"
    },
    {
        "question": "Which component of the ECM is primarily responsible for resisting compressive forces?",
        "options": [
            "A) Collagen",
            "B) Elastin",
            "C) Glycosaminoglycans (GAGs)",
            "D) Fibronectin",
            "E) Laminin"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: Collagen resists tensile stress.",
            "Incorrect: Elastin allows stretch and recoil.",
            "Correct: GAGs attract water and resist compression.",
            "Incorrect: Fibronectin helps with adhesion.",
            "Incorrect: Laminin is involved in basal lamina structure."
        ],
        "slideLink": "ECM Part 1 (Slide: GAGs and proteoglycans)"
    },
    {
        "question": "Which type of muscle is involuntary, striated, and has intercalated discs?",
        "options": [
            "A) Smooth muscle",
            "B) Skeletal muscle",
            "C) Cardiac muscle",
            "D) Myoepithelial cells",
            "E) Diaphragmatic muscle"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: Smooth muscle is non-striated.",
            "Incorrect: Skeletal muscle is voluntary.",
            "Correct: Cardiac muscle is involuntary, striated, and contains intercalated discs.",
            "Incorrect: Myoepithelial cells are contractile but not true muscle.",
            "Incorrect: Diaphragm is skeletal but under autonomic influence."
        ],
        "slideLink": "Tissue Types – Muscle (Slide: Cardiac muscle features)"
    },
    {
        "question": "What process is most affected in patients with Lesch-Nyhan syndrome?",
        "options": [
            "A) Glycolysis",
            "B) Urea cycle",
            "C) Purine salvage pathway",
            "D) Beta-oxidation",
            "E) Transamination"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: Glycolysis is not disrupted.",
            "Incorrect: The urea cycle is normal in LNS.",
            "Correct: LNS is due to HGPRT deficiency in purine salvage.",
            "Incorrect: Fat metabolism is not involved.",
            "Incorrect: Transamination is related to amino acid metabolism."
        ],
        "slideLink": "Amino Acids and Metabolism (Slide: Lesch-Nyhan syndrome)"
    },
    {
        "question": "Which structure in a sarcomere anchors the thin filaments and defines the boundary of each sarcomere?",
        "options": [
            "A) A band",
            "B) H zone",
            "C) Z line",
            "D) M line",
            "E) I band"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: A band includes thick filaments.",
            "Incorrect: H zone is the central part of thick filaments.",
            "Correct: Z lines anchor actin filaments and mark sarcomere boundaries.",
            "Incorrect: M line stabilizes thick filaments in the center.",
            "Incorrect: I band is the light area with thin filaments only."
        ],
        "slideLink": "Tissue Types – Muscle (Slide: Sarcomere structure)"
    },
    {
        "question": "Which pharmacokinetic parameter describes the volume into which a drug appears to be distributed in the body?",
        "options": [
            "A) Clearance",
            "B) Half-life",
            "C) Volume of distribution",
            "D) Bioavailability",
            "E) Peak plasma concentration"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: Clearance is the rate at which a drug is removed.",
            "Incorrect: Half-life is the time for drug levels to halve.",
            "Correct: Volume of distribution (Vd) relates drug dose to plasma concentration.",
            "Incorrect: Bioavailability measures drug absorption.",
            "Incorrect: Cmax refers to maximum plasma level, not distribution."
        ],
        "slideLink": "Pharmacokinetics Part 1 (Slide: Vd calculation)"
    },
    {
        "question": "Which of the following conditions results from an X-linked dominant mutation?",
        "options": [
            "A) Haemophilia A",
            "B) Duchenne muscular dystrophy",
            "C) Fragile X syndrome",
            "D) Phenylketonuria",
            "E) Cystic fibrosis"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: Haemophilia A is X-linked recessive.",
            "Incorrect: Duchenne is also X-linked recessive.",
            "Correct: Fragile X is a trinucleotide repeat disorder with X-linked dominant inheritance.",
            "Incorrect: PKU is autosomal recessive.",
            "Incorrect: CF is autosomal recessive."
        ],
        "slideLink": "Forms of Inheritance Lecture (Slide: Fragile X example)"
    },
    {
        "question": "What effect does activation of the muscarinic M3 receptor have on the bronchi?",
        "options": [
            "A) Bronchodilation",
            "B) Bronchoconstriction",
            "C) No effect",
            "D) Relaxation of bronchial smooth muscle",
            "E) Increased surfactant production"
        ],
        "correctIndex": 1,
        "explanations": [
            "Incorrect: Bronchodilation is via β2 receptors.",
            "Correct: M3 receptor activation causes bronchial smooth muscle contraction.",
            "Incorrect: M3 activation has a direct effect on bronchi.",
            "Incorrect: Relaxation is mediated by sympathetic input.",
            "Incorrect: Surfactant is produced by type II pneumocytes."
        ],
        "slideLink": "Pharmacodynamics Lecture (Slide: M3 effects on airway)"
    },
    {
        "question": "Which of the following best describes the concept of bioavailability?",
        "options": [
            "A) Rate of drug metabolism",
            "B) Ratio of drug bound to protein",
            "C) Fraction of administered drug that reaches systemic circulation",
            "D) Concentration of drug at the site of action",
            "E) Clearance rate by the liver"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: Metabolism is not bioavailability.",
            "Incorrect: Protein binding does not define availability.",
            "Correct: Bioavailability is the fraction of drug reaching circulation intact.",
            "Incorrect: It’s not about site-specific concentration.",
            "Incorrect: Clearance affects elimination, not absorption."
        ],
        "slideLink": "Pharmacokinetics Part 1 (Slide: Oral vs IV bioavailability)"
    },
    {
        "question": "Which statistical test is most appropriate for comparing means between more than two groups?",
        "options": [
            "A) Chi-square test",
            "B) Paired t-test",
            "C) Independent t-test",
            "D) ANOVA",
            "E) Fisher’s exact test"
        ],
        "correctIndex": 3,
        "explanations": [
            "Incorrect: Chi-square is for categorical data.",
            "Incorrect: Paired t-test compares two matched groups.",
            "Incorrect: Independent t-test is for two unpaired groups.",
            "Correct: ANOVA compares means across three or more groups.",
            "Incorrect: Fisher's is used for small categorical samples."
        ],
        "slideLink": "Other Hypothesis Tests Lecture (Slide: Parametric vs non-parametric)"
    },
    {
        "question": "Which disease is associated with a mutation in the gene coding for fibrillin-1?",
        "options": [
            "A) Ehlers-Danlos syndrome",
            "B) Marfan syndrome",
            "C) Osteogenesis imperfecta",
            "D) Epidermolysis bullosa",
            "E) Homocystinuria"
        ],
        "correctIndex": 1,
        "explanations": [
            "Incorrect: EDS involves collagen or tenascin genes.",
            "Correct: Marfan syndrome is caused by defective fibrillin-1 affecting connective tissue.",
            "Incorrect: OI is due to type I collagen mutations.",
            "Incorrect: EB affects proteins like keratin or laminin.",
            "Incorrect: Homocystinuria involves metabolic enzyme defects."
        ],
        "slideLink": "ECM Lecture (Slide: Marfan syndrome and fibrillin)"
    },
    {
        "question": "Which phase of the cell cycle involves DNA replication?",
        "options": [
            "A) G1 phase",
            "B) G2 phase",
            "C) M phase",
            "D) S phase",
            "E) G0 phase"
        ],
        "correctIndex": 3,
        "explanations": [
            "Incorrect: G1 is for growth before replication.",
            "Incorrect: G2 is post-replication growth and prep for mitosis.",
            "Incorrect: M phase is mitosis.",
            "Correct: S phase is where DNA synthesis occurs.",
            "Incorrect: G0 is a quiescent state."
        ],
        "slideLink": "Mitosis & Meiosis Lecture (Slide: Cell cycle overview)"
    },
    {
        "question": "Which of the following terms describes an increase in cell size without an increase in cell number?",
        "options": [
            "A) Hyperplasia",
            "B) Metaplasia",
            "C) Atrophy",
            "D) Dysplasia",
            "E) Hypertrophy"
        ],
        "correctIndex": 4,
        "explanations": [
            "Incorrect: Hyperplasia increases cell number.",
            "Incorrect: Metaplasia is a change in cell type.",
            "Incorrect: Atrophy is cell size or number decrease.",
            "Incorrect: Dysplasia is abnormal cell growth.",
            "Correct: Hypertrophy refers to increased cell size."
        ],
        "slideLink": "Neoplastic Growth Lecture (Slide: Hypertrophy examples)"
    },
    {
        "question": "What is the purpose of a loading dose in pharmacology?",
        "options": [
            "A) Maintain steady-state concentration",
            "B) Speed up drug clearance",
            "C) Rapidly achieve therapeutic concentration",
            "D) Prevent adverse effects",
            "E) Enhance liver metabolism"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: Maintenance dose does this.",
            "Incorrect: Clearance is not the goal.",
            "Correct: Loading dose brings plasma drug levels up quickly.",
            "Incorrect: It can actually increase side effects if not calculated properly.",
            "Incorrect: Liver metabolism is unaffected directly by loading dose."
        ],
        "slideLink": "Pharmacokinetics Part 2 (Slide: Loading dose equation)"
    },
    {
        "question": "What is the function of surfactant in the lungs?",
        "options": [
            "A) Increases alveolar surface tension",
            "B) Reduces alveolar surface tension",
            "C) Enhances gas solubility in blood",
            "D) Prevents oxygen diffusion",
            "E) Stimulates bronchial smooth muscle contraction"
        ],
        "correctIndex": 1,
        "explanations": [
            "Incorrect: Surfactant decreases surface tension, not increases it.",
            "Correct: Surfactant reduces surface tension to prevent alveolar collapse.",
            "Incorrect: It does not alter solubility in blood.",
            "Incorrect: Oxygen diffusion is facilitated, not inhibited.",
            "Incorrect: Surfactant acts on alveoli, not smooth muscle."
        ],
        "slideLink": "Muscle & Physiology (Slide: Pulmonary surfactant)"
    },
    {
        "question": "Which of the following cell types are primarily responsible for the production of collagen in connective tissue?",
        "options": [
            "A) Mast cells",
            "B) Chondrocytes",
            "C) Fibroblasts",
            "D) Macrophages",
            "E) Osteoclasts"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: Mast cells release histamine, not collagen.",
            "Incorrect: Chondrocytes produce cartilage ECM, not general connective tissue collagen.",
            "Correct: Fibroblasts synthesize collagen and ECM components in connective tissue.",
            "Incorrect: Macrophages are phagocytic cells.",
            "Incorrect: Osteoclasts resorb bone, not build matrix."
        ],
        "slideLink": "Connective Tissue Lecture (Slide: Fibroblasts and collagen)"
    },
    {
        "question": "Which disease is characterised by excessive copper accumulation in tissues, especially liver and brain?",
        "options": [
            "A) Haemochromatosis",
            "B) Wilson disease",
            "C) Menkes disease",
            "D) Gaucher disease",
            "E) Tay-Sachs disease"
        ],
        "correctIndex": 1,
        "explanations": [
            "Incorrect: Haemochromatosis involves iron overload.",
            "Correct: Wilson disease causes copper buildup due to ATP7B mutation.",
            "Incorrect: Menkes involves impaired copper transport but causes deficiency.",
            "Incorrect: Gaucher is a lysosomal storage disease, not related to copper.",
            "Incorrect: Tay-Sachs involves GM2 ganglioside accumulation."
        ],
        "slideLink": "Clinical Biochemistry (Slide: Copper metabolism disorders)"
    },
    {
        "question": "Which component of the immune system is responsible for recognising antigens presented by MHC class I molecules?",
        "options": [
            "A) B cells",
            "B) CD4+ T cells",
            "C) CD8+ T cells",
            "D) Natural killer cells",
            "E) Macrophages"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: B cells recognise native antigens, not MHC-bound.",
            "Incorrect: CD4+ T cells interact with MHC class II.",
            "Correct: CD8+ cytotoxic T cells recognise peptides on MHC I and kill infected cells.",
            "Incorrect: NK cells detect missing self, not MHC recognition.",
            "Incorrect: Macrophages present antigens but do not respond to MHC I."
        ],
        "slideLink": "Immunology (Slide: MHC I and CD8+ T cells)"
    },
    {
        "question": "Which of the following is most characteristic of case-control studies?",
        "options": [
            "A) Random allocation to exposure groups",
            "B) Measures incidence directly",
            "C) Efficient for studying rare diseases",
            "D) Establishes causality definitively",
            "E) Starts with exposed and non-exposed groups"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: That describes RCTs.",
            "Incorrect: Case-control cannot calculate incidence.",
            "Correct: Case-control starts with outcome and looks back, efficient for rare outcomes.",
            "Incorrect: Can suggest association, not confirm causation.",
            "Incorrect: This describes cohort studies."
        ],
        "slideLink": "Epidemiology Lecture (Slide: Study designs)"
    },
    {
        "question": "Which antimicrobial drug class targets bacterial folic acid synthesis?",
        "options": [
            "A) Beta-lactams",
            "B) Macrolides",
            "C) Fluoroquinolones",
            "D) Sulfonamides",
            "E) Aminoglycosides"
        ],
        "correctIndex": 3,
        "explanations": [
            "Incorrect: Beta-lactams inhibit cell wall synthesis.",
            "Incorrect: Macrolides inhibit protein synthesis.",
            "Incorrect: Fluoroquinolones inhibit DNA gyrase.",
            "Correct: Sulfonamides inhibit folic acid pathway, preventing nucleotide synthesis.",
            "Incorrect: Aminoglycosides disrupt translation."
        ],
        "slideLink": "Infection Control (Slide: Sulfonamide mechanism)"
    },
    {
        "question": "Which vitamin is most essential for preventing neural tube defects in developing embryos?",
        "options": [
            "A) Vitamin A",
            "B) Vitamin B6",
            "C) Folic acid",
            "D) Vitamin D",
            "E) Vitamin C"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: Vitamin A is involved in vision and epithelium.",
            "Incorrect: B6 supports neurotransmitters but not neural tube formation.",
            "Correct: Folate is essential for DNA synthesis during early development.",
            "Incorrect: Vitamin D is for calcium metabolism.",
            "Incorrect: Vitamin C is for collagen synthesis."
        ],
        "slideLink": "Clinical Biochemistry (Slide: Neural tube defects)"
    },
    {
        "question": "Which protein is deficient in Duchenne muscular dystrophy?",
        "options": [
            "A) Dystrophin",
            "B) Collagen I",
            "C) Actin",
            "D) Laminin",
            "E) Myosin"
        ],
        "correctIndex": 0,
        "explanations": [
            "Correct: Duchenne results from a lack of dystrophin, destabilising muscle fibres.",
            "Incorrect: Collagen I is not specific to this disease.",
            "Incorrect: Actin is present but not deficient.",
            "Incorrect: Laminin is part of the ECM but not the cause here.",
            "Incorrect: Myosin is unaffected in this disorder."
        ],
        "slideLink": "Muscle Physiology (Slide: Dystrophin mutation)"
    },
    {
        "question": "Which laboratory test is used to evaluate kidney function and filtration rate?",
        "options": [
            "A) ALT",
            "B) Creatinine",
            "C) Bilirubin",
            "D) Amylase",
            "E) AST"
        ],
        "correctIndex": 1,
        "explanations": [
            "Incorrect: ALT reflects liver function.",
            "Correct: Serum creatinine is a key marker for glomerular filtration rate (GFR).",
            "Incorrect: Bilirubin indicates liver dysfunction.",
            "Incorrect: Amylase evaluates pancreatic function.",
            "Incorrect: AST is also liver-related."
        ],
        "slideLink": "Clinical Biochemistry (Slide: Renal panels)"
    },
    {
        "question": "Which receptor is primarily responsible for vasoconstriction in response to sympathetic stimulation?",
        "options": [
            "A) β1",
            "B) β2",
            "C) α1",
            "D) α2",
            "E) M3"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: β1 affects heart rate and contractility.",
            "Incorrect: β2 causes vasodilation and bronchodilation.",
            "Correct: α1 receptors cause vascular smooth muscle contraction.",
            "Incorrect: α2 has presynaptic inhibition roles.",
            "Incorrect: M3 mediates parasympathetic effects."
        ],
        "slideLink": "Receptor Classification Lecture (Slide: α1 receptor function)"
    },
    {
        "question": "Which part of the brain is primarily responsible for maintaining balance and coordinating movement?",
        "options": [
            "A) Cerebrum",
            "B) Hypothalamus",
            "C) Cerebellum",
            "D) Brainstem",
            "E) Hippocampus"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: The cerebrum controls voluntary thought and action.",
            "Incorrect: The hypothalamus regulates autonomic functions and hormones.",
            "Correct: The cerebellum fine-tunes motor activity and maintains balance.",
            "Incorrect: The brainstem controls vital functions like breathing and heart rate.",
            "Incorrect: The hippocampus is involved in memory, not balance."
        ],
        "slideLink": "ANS & Neuronal Control (Slide: Cerebellar function)"
    },
    {
        "question": "Which is the main neurotransmitter released by postganglionic sympathetic neurons to most effector organs?",
        "options": [
            "A) Acetylcholine",
            "B) Dopamine",
            "C) Epinephrine",
            "D) Norepinephrine",
            "E) Serotonin"
        ],
        "correctIndex": 3,
        "explanations": [
            "Incorrect: ACh is used in parasympathetic and sweat glands only.",
            "Incorrect: Dopamine acts in CNS and specific kidney receptors.",
            "Incorrect: Epinephrine is secreted by adrenal medulla, not neurons.",
            "Correct: NE is the primary neurotransmitter of sympathetic postganglionic neurons.",
            "Incorrect: Serotonin is mainly found in the GI tract and brain."
        ],
        "slideLink": "ANS Lecture (Slide: Sympathetic neurotransmitters)"
    },
    {
        "question": "Which of the following correctly pairs a second messenger with its activating receptor type?",
        "options": [
            "A) IP3 – β1-adrenoceptor",
            "B) cAMP – α1-adrenoceptor",
            "C) IP3 – M3 muscarinic receptor",
            "D) cGMP – α2-adrenoceptor",
            "E) cAMP – M3 muscarinic receptor"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: β1 stimulates cAMP, not IP3.",
            "Incorrect: α1 activates IP3/DAG, not cAMP.",
            "Correct: M3 uses Gq protein to activate IP3 pathway.",
            "Incorrect: cGMP is linked to NO, not α2.",
            "Incorrect: M3 activates IP3/DAG, not cAMP."
        ],
        "slideLink": "Receptor-Effector Coupling (Slide: G-protein pathways)"
    },
    {
        "question": "Which of the following lipoproteins is responsible for reverse cholesterol transport?",
        "options": [
            "A) Chylomicrons",
            "B) VLDL",
            "C) LDL",
            "D) HDL",
            "E) IDL"
        ],
        "correctIndex": 3,
        "explanations": [
            "Incorrect: Chylomicrons transport dietary fat.",
            "Incorrect: VLDL delivers hepatic lipids to tissues.",
            "Incorrect: LDL delivers cholesterol to peripheral tissues.",
            "Correct: HDL carries cholesterol from tissues back to the liver.",
            "Incorrect: IDL is an intermediate formed during VLDL to LDL transition."
        ],
        "slideLink": "Lipid Metabolism (Slide: HDL and reverse transport)"
    },
    {
        "question": "Which chromosome abnormality results in Klinefelter syndrome?",
        "options": [
            "A) 45,X",
            "B) 47,XXY",
            "C) 47,XXX",
            "D) 46,XY,t(9;22)",
            "E) 47,XY+21"
        ],
        "correctIndex": 1,
        "explanations": [
            "Incorrect: 45,X is Turner syndrome.",
            "Correct: 47,XXY causes Klinefelter with features of hypogonadism.",
            "Incorrect: 47,XXX may be phenotypically normal.",
            "Incorrect: t(9;22) is the Philadelphia chromosome in CML.",
            "Incorrect: Trisomy 21 causes Down syndrome."
        ],
        "slideLink": "Mitosis & Chromosome Abnormalities (Slide: Klinefelter karyotype)"
    },
    {
        "question": "What is the function of MHC class II molecules?",
        "options": [
            "A) Present antigens to CD8+ T cells",
            "B) Present endogenous antigens",
            "C) Present antigens to B cells",
            "D) Present exogenous antigens to CD4+ T cells",
            "E) Stimulate NK cells"
        ],
        "correctIndex": 3,
        "explanations": [
            "Incorrect: CD8+ T cells recognize MHC I.",
            "Incorrect: MHC II presents exogenous, not endogenous, antigens.",
            "Incorrect: B cells recognize native antigens.",
            "Correct: MHC II presents external peptides to CD4+ helper T cells.",
            "Incorrect: NK cells recognize missing MHC I."
        ],
        "slideLink": "Immunology (Slide: MHC class II and CD4 interaction)"
    },
    {
        "question": "Which test is most appropriate to compare medians of two independent non-normally distributed samples?",
        "options": [
            "A) Paired t-test",
            "B) ANOVA",
            "C) Chi-square test",
            "D) Mann-Whitney U test",
            "E) Pearson correlation"
        ],
        "correctIndex": 3,
        "explanations": [
            "Incorrect: Paired t-test is for matched pairs.",
            "Incorrect: ANOVA compares multiple group means.",
            "Incorrect: Chi-square is for categorical data.",
            "Correct: Mann-Whitney is a non-parametric test for medians.",
            "Incorrect: Pearson is for continuous linear relationships."
        ],
        "slideLink": "Other Hypothesis Tests (Slide: Non-parametric tests)"
    },
    {
        "question": "Which of the following diseases is due to a mutation affecting keratin genes?",
        "options": [
            "A) Epidermolysis bullosa simplex",
            "B) Marfan syndrome",
            "C) Cystic fibrosis",
            "D) Tay-Sachs disease",
            "E) Ehlers-Danlos syndrome"
        ],
        "correctIndex": 0,
        "explanations": [
            "Correct: EB simplex is due to defective keratin 5 or 14, leading to skin fragility.",
            "Incorrect: Marfan is due to fibrillin-1 mutation.",
            "Incorrect: CF is due to CFTR mutation.",
            "Incorrect: Tay-Sachs involves lysosomal enzyme deficiency.",
            "Incorrect: EDS often involves collagen-related genes."
        ],
        "slideLink": "ECM Part 2 (Slide: Keratin gene disorders)"
    },
    {
        "question": "Which component of the ECM anchors epithelial cells to the basal lamina?",
        "options": [
            "A) Collagen I",
            "B) Fibronectin",
            "C) Elastin",
            "D) Laminin",
            "E) Keratin"
        ],
        "correctIndex": 3,
        "explanations": [
            "Incorrect: Collagen I is found in connective tissue.",
            "Incorrect: Fibronectin aids in cell adhesion but not basal lamina anchoring.",
            "Incorrect: Elastin provides elasticity, not anchoring.",
            "Correct: Laminin is a key component of the basal lamina.",
            "Incorrect: Keratin is a cytoskeletal protein."
        ],
        "slideLink": "ECM Part 1 (Slide: Basal lamina composition)"
    },
    {
        "question": "Which of the following is a risk factor for surgical site infection?",
        "options": [
            "A) Short duration surgery",
            "B) Preoperative antibiotics given within 1 hour",
            "C) Hyperglycaemia",
            "D) Normothermia during surgery",
            "E) Minimal tissue trauma"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: Short surgeries reduce infection risk.",
            "Incorrect: Timely antibiotics reduce infection.",
            "Correct: High glucose impairs immune response and wound healing.",
            "Incorrect: Normal body temperature is protective.",
            "Incorrect: Gentle tissue handling reduces risk."
        ],
        "slideLink": "Infection Control Lecture (Slide: SSI risk factors)"
    },
    {
        "question": "Which ion is primarily responsible for depolarization during an action potential?",
        "options": [
            "A) Potassium",
            "B) Calcium",
            "C) Sodium",
            "D) Chloride",
            "E) Magnesium"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: Potassium is responsible for repolarization, not depolarization.",
            "Incorrect: Calcium plays a role in neurotransmitter release, not initial depolarization.",
            "Correct: Sodium influx causes the membrane potential to rise, initiating depolarization.",
            "Incorrect: Chloride stabilizes the membrane potential.",
            "Incorrect: Magnesium regulates some ion channels but is not the primary depolarizing ion."
        ],
        "slideLink": "Nerve.pdf (Slide: Action potential phases)",
        "topic": "Neurophysiology"
    },
    {
        "question": "Which of the following is a hallmark of acute inflammation?",
        "options": [
            "A) Caseous necrosis",
            "B) Granuloma formation",
            "C) Neutrophil infiltration",
            "D) Fibrosis",
            "E) Giant cell presence"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: Caseous necrosis is seen in tuberculosis, not acute inflammation.",
            "Incorrect: Granulomas are a feature of chronic inflammation.",
            "Correct: Neutrophils are the first responders in acute inflammation.",
            "Incorrect: Fibrosis is associated with healing or chronic inflammation.",
            "Incorrect: Giant cells form in granulomatous inflammation."
        ],
        "slideLink": "Histopathology - Inflammation.pdf (Slide: Acute vs Chronic)",
        "topic": "Immunology"
    },
    {
        "question": "What is the main role of the cerebellum in the nervous system?",
        "options": [
            "A) Memory encoding",
            "B) Visual processing",
            "C) Hormone regulation",
            "D) Coordination of movement",
            "E) Speech comprehension"
        ],
        "correctIndex": 3,
        "explanations": [
            "Incorrect: Memory encoding primarily occurs in the hippocampus.",
            "Incorrect: Visual processing is a function of the occipital lobe.",
            "Incorrect: Hormone regulation is handled by the hypothalamus.",
            "Correct: The cerebellum fine-tunes motor activity and balance.",
            "Incorrect: Speech comprehension involves Wernicke's area."
        ],
        "slideLink": "Divisions of the Nervous System.pdf (Slide: Cerebellum functions)",
        "topic": "Neuroanatomy"
    },
    {
        "question": "Which part of the synapse releases neurotransmitters?",
        "options": [
            "A) Dendritic spine",
            "B) Axon hillock",
            "C) Presynaptic terminal",
            "D) Node of Ranvier",
            "E) Myelin sheath"
        ],
        "correctIndex": 2,
        "explanations": [
            "Incorrect: The dendritic spine receives neurotransmitters.",
            "Incorrect: The axon hillock initiates action potentials but doesn't release neurotransmitters.",
            "Correct: The presynaptic terminal releases neurotransmitters into the synaptic cleft.",
            "Incorrect: Nodes of Ranvier aid in saltatory conduction, not transmission.",
            "Incorrect: Myelin insulates the axon but is not involved in synaptic transmission."
        ],
        "slideLink": "Nerve.pdf (Slide: Synaptic transmission)",
        "topic": "Neurophysiology"
    },
    {
        "question": "Thermoregulation is primarily controlled by which brain structure?",
        "options": [
            "A) Cerebellum",
            "B) Medulla oblongata",
            "C) Pituitary gland",
            "D) Hypothalamus",
            "E) Amygdala"
        ],
        "correctIndex": 3,
        "explanations": [
            "Incorrect: The cerebellum controls movement coordination.",
            "Incorrect: The medulla controls basic vital functions, not temperature.",
            "Incorrect: The pituitary gland is the endocrine interface, not the thermostat.",
            "Correct: The hypothalamus monitors and regulates body temperature.",
            "Incorrect: The amygdala is involved in emotion processing."
        ],
        "slideLink": "Thermoregulation and the Autonomic Nervous System Med1028 upload.pdf (Slide: Hypothalamus)",
        "topic": "Neurophysiology"
    },
	{
	  "question": "Which of the following is a function of astrocytes in the central nervous system?",
	  "options": [
	    "A) Myelination of axons",
	    "B) Phagocytosis of pathogens",
	    "C) Transmission of nerve impulses",
	    "D) Maintenance of the blood-brain barrier",
	    "E) Production of cerebrospinal fluid"
	  ],
	  "correctIndex": 3,
	  "explanations": [
	    "Incorrect: Myelination is the role of oligodendrocytes in the CNS.",
	    "Incorrect: Microglia are responsible for phagocytosis.",
	    "Incorrect: Neurons, not glial cells, transmit impulses.",
	    "Correct: Astrocytes maintain the blood-brain barrier and support neuronal function.",
	    "Incorrect: CSF is produced by the choroid plexus, not astrocytes."
	  ],
	  "slideLink": "Divisions of the Nervous System.pdf (Slide: Neuroglia)"
	},
	{
	  "question": "In thermoregulation, what is the role of arteriovenous anastomoses in the skin?",
	  "options": [
	    "A) Regulate heat loss by blood flow control",
	    "B) Stimulate shivering",
	    "C) Increase sweat gland secretion",
	    "D) Promote heat generation in brown fat",
	    "E) Measure ambient temperature"
	  ],
	  "correctIndex": 0,
	  "explanations": [
	    "Correct: AV anastomoses regulate skin blood flow to control heat loss.",
	    "Incorrect: Shivering is controlled centrally via muscle contractions.",
	    "Incorrect: Sweat secretion is controlled by sympathetic cholinergic nerves.",
	    "Incorrect: Brown fat thermogenesis is unrelated to AV anastomoses.",
	    "Incorrect: Thermoreceptors detect ambient temperature, not AV shunts."
	  ],
	  "slideLink": "Thermoregulation and the Autonomic Nervous System Med1028 upload.pdf"
	},
	{
	  "question": "Which type of joint is the pubic symphysis classified as?",
	  "options": [
	    "A) Secondary cartilaginous",
	    "B) Synovial",
	    "C) Fibrous",
	    "D) Primary cartilaginous",
	    "E) Gomphosis"
	  ],
	  "correctIndex": 0,
	  "explanations": [
	    "Correct: The pubic symphysis is a secondary cartilaginous joint with fibrocartilage and slight movement.",
	    "Incorrect: Synovial joints are freely movable and contain a joint cavity.",
	    "Incorrect: Fibrous joints have little to no movement and no cartilage.",
	    "Incorrect: Primary cartilaginous joints involve hyaline cartilage in development.",
	    "Incorrect: Gomphosis refers to tooth-to-socket joints."
	  ],
	  "slideLink": "Practical 05b Overview of Joints.pdf"
	},
    {
        "question": "Which of the following best explains the effect of acetylcholine on heart rate when acting via muscarinic receptors?",
        "options": [
            "A) Increases heart rate via beta-adrenergic stimulation",
            "B) Decreases heart rate by increasing calcium influx",
            "C) Increases heart rate by decreasing potassium conductance",
            "D) Decreases heart rate by increasing potassium efflux",
            "E) Increases heart rate by stimulating sodium channels"
        ],
        "correctIndex": 3,
        "explanations": [
            "Incorrect: Beta-adrenergic stimulation is mediated by sympathetic input, not acetylcholine.",
            "Incorrect: Muscarinic activation decreases calcium influx, not increases.",
            "Incorrect: This would enhance excitability, not slow heart rate.",
            "Correct: Acetylcholine via M2 receptors increases potassium efflux, slowing depolarization in the SA node.",
            "Incorrect: Sodium channel stimulation increases heart rate, not the effect of muscarinic activation."
        ],
        "slideLink": "Homeostasis and Control Systems (Slide: Autonomic regulation)"
    },
    {
        "question": "Which component of a synovial joint produces synovial fluid?",
        "options": [
            "A) Articular cartilage",
            "B) Joint capsule",
            "C) Subchondral bone",
            "D) Synovial membrane",
            "E) Ligaments"
        ],
        "correctIndex": 3,
        "explanations": [
            "Incorrect: Articular cartilage provides a smooth surface but does not secrete fluid.",
            "Incorrect: The joint capsule encloses the joint but doesn’t produce fluid.",
            "Incorrect: Subchondral bone lies beneath cartilage but has no secretory function.",
            "Correct: The synovial membrane secretes synovial fluid for joint lubrication.",
            "Incorrect: Ligaments provide stability but do not secrete synovial fluid."
        ],
        "slideLink": "Practical 05b Overview of Joints (Slide: Synovial joint anatomy)"
    },
    {
        "question": "Which of the following describes the primary function of brown adipose tissue in thermoregulation?",
        "options": [
            "A) Insulation through subcutaneous deposition",
            "B) Heat generation via uncoupled oxidative phosphorylation",
            "C) Storage of triglycerides for energy",
            "D) Regulation of shivering response",
            "E) Secretion of sweat for evaporative cooling"
        ],
        "correctIndex": 1,
        "explanations": [
            "Incorrect: Insulation is a passive function of white fat, not brown fat.",
            "Correct: Brown fat contains UCP1, which uncouples oxidative phosphorylation to produce heat.",
            "Incorrect: Energy storage is a function of white adipose, not brown.",
            "Incorrect: Shivering is regulated by the hypothalamus, not adipose tissue.",
            "Incorrect: Sweat secretion is performed by eccrine glands in the skin."
        ],
        "slideLink": "Thermoregulation and the Autonomic Nervous System (Slide: Brown fat function)"
    },
  {
    "question": "What is the effect of sympathetic stimulation on the radial muscles of the iris?",
    "options": [
      "A) Pupil constriction via muscarinic receptors",
      "B) Pupil dilation via alpha-1 adrenergic receptors",
      "C) No change in pupil size",
      "D) Increased aqueous humor secretion",
      "E) Decreased intraocular pressure"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Muscarinic receptors mediate constriction (miosis), not dilation.",
      "Correct: Alpha-1 adrenergic receptors cause contraction of radial muscles, leading to dilation (mydriasis).",
      "Incorrect: Sympathetic activation does affect pupil size.",
      "Incorrect: This is a separate function involving ciliary body activity.",
      "Incorrect: Dilation may temporarily raise intraocular pressure."
    ],
    "slideLink": "Homeostasis and Control Systems (Slide: Autonomic eye effects)"
  },
  {
    "question": "Which of the following spinal cord tracts is primarily responsible for voluntary motor control?",
    "options": [
      "A) Spinothalamic tract",
      "B) Dorsal column-medial lemniscus",
      "C) Corticospinal tract",
      "D) Spinocerebellar tract",
      "E) Reticulospinal tract"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: This tract transmits pain and temperature.",
      "Incorrect: This carries fine touch and proprioception.",
      "Correct: The corticospinal tract carries upper motor neuron fibers for voluntary movement.",
      "Incorrect: This coordinates proprioceptive input, not voluntary movement.",
      "Incorrect: It modulates reflex activity but is not the main voluntary pathway."
    ],
    "slideLink": "Divisions of the Nervous System (Slide: Motor pathways)"
  },
  {
    "question": "Which layer of the skin contains Meissner's corpuscles responsible for fine touch detection?",
    "options": [
      "A) Stratum basale",
      "B) Reticular dermis",
      "C) Hypodermis",
      "D) Papillary dermis",
      "E) Epidermis"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: This layer contains mitotic keratinocytes, not sensory structures.",
      "Incorrect: The reticular dermis contains larger vessels and collagen bundles.",
      "Incorrect: The hypodermis mainly stores fat and supports vasculature.",
      "Correct: Meissner’s corpuscles are located in the papillary dermis for tactile sensation.",
      "Incorrect: The epidermis lacks nerve endings and sensory corpuscles."
    ],
    "slideLink": "Integumentary System (Slide: Skin innervation)"
  },
  {
    "question": "Which type of joint is exemplified by the pubic symphysis?",
    "options": [
      "A) Synovial joint",
      "B) Gomphosis",
      "C) Symphysis",
      "D) Synchondrosis",
      "E) Syndesmosis"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Synovial joints have a cavity and capsule, which the pubic symphysis lacks.",
      "Incorrect: Gomphoses are found between teeth and sockets.",
      "Correct: The pubic symphysis is a secondary cartilaginous joint (symphysis) with fibrocartilage.",
      "Incorrect: Synchondrosis involves hyaline cartilage and typically fuses over time.",
      "Incorrect: Syndesmosis involves fibrous connection between long bones."
    ],
    "slideLink": "Practical 05b Overview of Joints (Slide: Cartilaginous joints)"
  },
  {
    "question": "Which of the following accurately describes the somatic nervous system?",
    "options": [
      "A) Involuntary control of cardiac muscle",
      "B) Two-neuron chain with ganglia",
      "C) Sensory input from viscera only",
      "D) Single motor neuron from CNS to skeletal muscle",
      "E) Uses norepinephrine at the effector"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Somatic control is voluntary, not of cardiac muscle.",
      "Incorrect: Autonomic systems use two-neuron chains.",
      "Incorrect: Somatic afferents carry signals from skin and muscle, not viscera.",
      "Correct: Somatic motor pathways involve a single neuron projecting directly to skeletal muscle.",
      "Incorrect: Somatic motor neurons release acetylcholine, not norepinephrine."
    ],
    "slideLink": "Divisions of the Nervous System (Slide: Somatic vs autonomic)"
  },
  {
    "question": "What is the function of the Pacinian corpuscle?",
    "options": [
      "A) Detect light touch",
      "B) Detect temperature",
      "C) Detect deep pressure and vibration",
      "D) Detect pain",
      "E) Detect proprioception"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Meissner’s corpuscles are responsible for light touch.",
      "Incorrect: Thermoreceptors detect temperature.",
      "Correct: Pacinian corpuscles respond to deep pressure and vibration.",
      "Incorrect: Nociceptors detect pain.",
      "Incorrect: Muscle spindles and Golgi tendon organs detect proprioception."
    ],
    "slideLink": "Integumentary System (Slide: Sensory receptors)"
  },
  {
    "question": "Which part of the brain integrates autonomic responses to temperature change?",
    "options": [
      "A) Pons",
      "B) Hippocampus",
      "C) Cerebellum",
      "D) Hypothalamus",
      "E) Amygdala"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: The pons regulates breathing and cranial reflexes.",
      "Incorrect: The hippocampus is involved in memory, not temperature regulation.",
      "Incorrect: The cerebellum coordinates movement but not autonomic output.",
      "Correct: The hypothalamus integrates temperature signals and regulates autonomic responses like sweating and vasodilation.",
      "Incorrect: The amygdala is involved in emotion, not thermoregulation."
    ],
    "slideLink": "Thermoregulation and the Autonomic Nervous System (Slide: Hypothalamic control)"
  },
  {
    "question": "Which inflammatory cell is typically predominant in chronic inflammation?",
    "options": [
      "A) Neutrophils",
      "B) Eosinophils",
      "C) Lymphocytes",
      "D) Basophils",
      "E) Platelets"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Neutrophils dominate acute inflammation.",
      "Incorrect: Eosinophils are seen in parasitic infections and allergies.",
      "Correct: Lymphocytes accumulate during chronic inflammation as part of adaptive immunity.",
      "Incorrect: Basophils are involved in allergic responses but are rare.",
      "Incorrect: Platelets are involved in clotting, not inflammation."
    ],
    "slideLink": "Histopathology – Inflammation (Slide: Chronic inflammation)"
  },
  {
    "question": "Which cytokine is primarily responsible for inducing fever?",
    "options": [
      "A) IL-2",
      "B) TNF-alpha",
      "C) IL-10",
      "D) IL-1",
      "E) TGF-beta"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: IL-2 is involved in T cell proliferation.",
      "Incorrect: TNF-alpha is pro-inflammatory but not the main pyrogen.",
      "Incorrect: IL-10 is anti-inflammatory.",
      "Correct: IL-1 stimulates the hypothalamus to increase body temperature.",
      "Incorrect: TGF-beta promotes wound healing, not fever."
    ],
    "slideLink": "Histopathology – Inflammation (Slide: Systemic effects)"
  },
  {
    "question": "Which nerve fibers are responsible for transmitting sharp, well-localized pain?",
    "options": [
      "A) C fibers",
      "B) A-delta fibers",
      "C) A-beta fibers",
      "D) B fibers",
      "E) Gamma motor neurons"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: C fibers transmit dull, poorly localized pain.",
      "Correct: A-delta fibers transmit sharp, localized pain quickly.",
      "Incorrect: A-beta fibers carry touch and pressure, not pain.",
      "Incorrect: B fibers are autonomic preganglionic fibers.",
      "Incorrect: Gamma motor neurons innervate intrafusal muscle fibers."
    ],
    "slideLink": "Nerve.pdf (Slide: Sensory fiber types)"
  },
  {
    "question": "Which joint movement term describes moving a limb away from the midline of the body?",
    "options": [
      "A) Flexion",
      "B) Extension",
      "C) Abduction",
      "D) Adduction",
      "E) Pronation"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Flexion decreases the angle between bones.",
      "Incorrect: Extension increases the angle between bones.",
      "Correct: Abduction is movement away from the midline.",
      "Incorrect: Adduction is toward the midline.",
      "Incorrect: Pronation is a rotational movement of the forearm."
    ],
    "slideLink": "Practical 05b Overview of Joints (Slide: Movements at synovial joints)"
  },
  {
    "question": "Which part of the neuron carries impulses away from the cell body?",
    "options": [
      "A) Dendrites",
      "B) Soma",
      "C) Axon",
      "D) Axon hillock",
      "E) Myelin sheath"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Dendrites receive signals.",
      "Incorrect: The soma is the cell body, not a transmission route.",
      "Correct: The axon transmits action potentials away from the cell body.",
      "Incorrect: The axon hillock initiates action potentials but doesn't conduct them far.",
      "Incorrect: Myelin insulates the axon but is not the conductor itself."
    ],
    "slideLink": "Nerve.pdf (Slide: Neuron structure)"
  },
  {
    "question": "Which structure in the joint capsule detects tension and contributes to proprioception?",
    "options": [
      "A) Golgi tendon organ",
      "B) Pacinian corpuscle",
      "C) Ruffini ending",
      "D) Free nerve ending",
      "E) Merkel disc"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Found in tendons, not joint capsules.",
      "Incorrect: Pacinian corpuscles detect vibration, not tension.",
      "Correct: Ruffini endings detect joint stretch and contribute to proprioception.",
      "Incorrect: Free nerve endings detect pain and temperature.",
      "Incorrect: Merkel discs detect pressure in the skin."
    ],
    "slideLink": "Practical 05b Overview of Joints (Slide: Joint receptors)"
  },
  {
    "question": "Which immune cell is most involved in granuloma formation?",
    "options": [
      "A) Neutrophils",
      "B) CD4+ T cells",
      "C) B lymphocytes",
      "D) Macrophages",
      "E) NK cells"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Neutrophils are not involved in granuloma structure.",
      "Incorrect: CD4+ cells activate macrophages but do not form granulomas.",
      "Incorrect: B cells produce antibodies, not granulomas.",
      "Correct: Macrophages aggregate and differentiate into epithelioid and giant cells within granulomas.",
      "Incorrect: NK cells kill infected cells, not involved in granuloma architecture."
    ],
    "slideLink": "Histopathology – Inflammation (Slide: Granulomatous inflammation)"
  },
  {
    "question": "Which brain structure relays sensory signals to the cerebral cortex?",
    "options": [
      "A) Medulla",
      "B) Cerebellum",
      "C) Thalamus",
      "D) Hypothalamus",
      "E) Pons"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Medulla controls autonomic functions.",
      "Incorrect: Cerebellum coordinates movement.",
      "Correct: Thalamus relays sensory input to appropriate cortical areas.",
      "Incorrect: Hypothalamus regulates autonomic and endocrine functions.",
      "Incorrect: Pons assists in motor control and coordination."
    ],
    "slideLink": "Divisions of the Nervous System (Slide: Thalamic function)"
  },
  {
  "question": "Which structure forms the blood-nerve barrier?",
  "options": [
      "A) Perineurium",
      "B) Epineurium",
      "C) Endoneurium",
      "D) Schwann cell sheath",
      "E) Myelin"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: The perineurium creates a selective barrier around nerve fascicles.",
      "Incorrect: The epineurium surrounds the entire nerve but does not form the barrier.",
      "Incorrect: The endoneurium surrounds individual axons but is not a barrier.",
      "Incorrect: Schwann cells insulate axons but don’t form the barrier.",
      "Incorrect: Myelin insulates but is not responsible for blood-nerve barrier integrity."
    ],
    "slideLink": "Nerve.pdf (Slide: Peripheral nerve layers)"
  },
  {
    "question": "Which part of the hypothalamus promotes heat conservation responses?",
    "options": [
      "A) Lateral hypothalamus",
      "B) Anterior hypothalamus",
      "C) Posterior hypothalamus",
      "D) Supraoptic nucleus",
      "E) Arcuate nucleus"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Lateral hypothalamus controls feeding and arousal.",
      "Incorrect: Anterior hypothalamus promotes heat dissipation.",
      "Correct: The posterior hypothalamus triggers heat conservation mechanisms like vasoconstriction and shivering.",
      "Incorrect: Supraoptic nucleus regulates ADH, not temperature.",
      "Incorrect: Arcuate nucleus regulates energy balance, not thermoregulation."
    ],
    "slideLink": "Thermoregulation and the Autonomic Nervous System (Slide: Hypothalamic thermoregulation)"
  },
  {
    "question": "Which of the following types of necrosis is most commonly seen in myocardial infarction?",
    "options": [
      "A) Caseous necrosis",
      "B) Liquefactive necrosis",
      "C) Coagulative necrosis",
      "D) Fibrinoid necrosis",
      "E) Fat necrosis"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Caseous necrosis is more typical in tuberculosis.",
      "Incorrect: Liquefactive necrosis is more common in brain infarcts.",
      "Correct: Coagulative necrosis is typical of ischemic damage in solid organs such as the heart.",
      "Incorrect: Fibrinoid necrosis is seen in immune reactions and vasculitis.",
      "Incorrect: Fat necrosis occurs in acute pancreatitis and trauma to fat."
    ],
    "slideLink": "Histopathology - Inflammation (Slide: Types of necrosis)"
  },
  {
    "question": "Which brain structure is the main integrative center for homeostatic control?",
    "options": [
      "A) Hippocampus",
      "B) Hypothalamus",
      "C) Thalamus",
      "D) Medulla oblongata",
      "E) Cerebellum"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: The hippocampus is involved in memory formation.",
      "Correct: The hypothalamus regulates temperature, thirst, hunger, and autonomic function.",
      "Incorrect: The thalamus relays sensory signals but is not a homeostatic center.",
      "Incorrect: The medulla controls vital reflexes but not broad homeostatic integration.",
      "Incorrect: The cerebellum coordinates movement but not homeostasis."
    ],
    "slideLink": "Homeostasis and Control Systems (Slide: Hypothalamic functions)"
  },
  {
    "question": "What is the function of the blood-brain barrier?",
    "options": [
      "A) Transport of hormones into the brain",
      "B) Protection from mechanical injury",
      "C) Regulation of molecule passage between blood and brain",
      "D) Prevention of all substance entry into the brain",
      "E) Facilitation of CSF production"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Hormone entry is tightly regulated, not the primary function.",
      "Incorrect: Mechanical protection is provided by the skull and meninges.",
      "Correct: The BBB controls the passage of ions, nutrients, and toxins into the CNS.",
      "Incorrect: The barrier is selective, not absolute.",
      "Incorrect: CSF is produced by the choroid plexus, not the BBB."
    ],
    "slideLink": "Divisions of the Nervous System (Slide: Blood-brain barrier)"
  },
  {
    "question": "What is the effect of aldosterone on the kidneys?",
    "options": [
      "A) Increases sodium reabsorption and potassium excretion",
      "B) Increases glucose reabsorption",
      "C) Increases potassium reabsorption",
      "D) Increases sodium excretion",
      "E) Inhibits water reabsorption"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: Aldosterone stimulates sodium reabsorption and potassium excretion in the distal nephron.",
      "Incorrect: Glucose reabsorption is regulated by other transporters, not aldosterone.",
      "Incorrect: It increases potassium excretion, not reabsorption.",
      "Incorrect: Aldosterone promotes sodium retention, not excretion.",
      "Incorrect: Aldosterone indirectly promotes water reabsorption via sodium retention."
    ],
    "slideLink": "Homeostasis and Control Systems (Slide: Aldosterone actions)"
  },
  {
    "question": "Which of the following ions primarily contributes to the resting membrane potential in neurons?",
    "options": [
      "A) Sodium",
      "B) Potassium",
      "C) Calcium",
      "D) Chloride",
      "E) Magnesium"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Sodium contributes to depolarization but not resting potential.",
      "Correct: Potassium ion distribution across the membrane is the primary determinant of resting membrane potential.",
      "Incorrect: Calcium is mainly involved in neurotransmitter release and excitability.",
      "Incorrect: Chloride has a role but is not the main determinant.",
      "Incorrect: Magnesium has limited direct effect on resting membrane potential."
    ],
    "slideLink": "Resting Membrane Potential (Slide: Role of K+)"
  },
  {
    "question": "What type of cell junction forms the blood-brain barrier?",
    "options": [
      "A) Tight junctions",
      "B) Desmosomes",
      "C) Gap junctions",
      "D) Hemidesmosomes",
      "E) Adherens junctions"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: Tight junctions between endothelial cells prevent paracellular diffusion, forming the BBB.",
      "Incorrect: Desmosomes provide mechanical strength, not barrier function.",
      "Incorrect: Gap junctions allow cell-cell communication, not barrier function.",
      "Incorrect: Hemidesmosomes anchor epithelial cells to basement membrane.",
      "Incorrect: Adherens junctions are involved in adhesion, not barrier function."
    ],
    "slideLink": "Divisions of the Nervous System (Slide: Endothelial barrier)"
  },
  {
    "question": "Which nerve fiber type conducts impulses the fastest?",
    "options": [
      "A) C fibers",
      "B) A-delta fibers",
      "C) A-alpha fibers",
      "D) A-beta fibers",
      "E) B fibers"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: C fibers are unmyelinated and slow.",
      "Incorrect: A-delta fibers are faster than C but slower than A-alpha.",
      "Correct: A-alpha fibers are large and myelinated, used for proprioception and motor control.",
      "Incorrect: A-beta fibers conduct touch, not the fastest.",
      "Incorrect: B fibers are preganglionic autonomic fibers, slower than A-alpha."
    ],
    "slideLink": "Nerve.pdf (Slide: Nerve fiber types)"
  },
  {
    "question": "Which layer of connective tissue surrounds individual axons in a peripheral nerve?",
    "options": [
      "A) Epineurium",
      "B) Perineurium",
      "C) Endoneurium",
      "D) Myelin sheath",
      "E) Fascicle"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Epineurium surrounds the entire nerve.",
      "Incorrect: Perineurium surrounds nerve fascicles.",
      "Correct: Endoneurium is the delicate connective tissue around individual axons.",
      "Incorrect: Myelin sheath is formed by Schwann cells, not connective tissue.",
      "Incorrect: A fascicle is a bundle of axons, not a layer."
    ],
    "slideLink": "Nerve.pdf (Slide: Nerve structure)"
  },
  {
    "question": "Which of the following best explains why demyelination slows action potential propagation in multiple sclerosis?",
    "options": [
      "A) Decreased neurotransmitter release",
      "B) Reduced axon diameter",
      "C) Increased membrane resistance",
      "D) Loss of saltatory conduction",
      "E) Excessive potassium influx"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Neurotransmitter release is a synaptic process, not directly related to conduction velocity.",
      "Incorrect: Axon diameter remains unchanged; it's the myelin that’s lost.",
      "Incorrect: Membrane resistance actually decreases in demyelination.",
      "Correct: Myelin insulates axons and enables saltatory conduction; without it, signals propagate more slowly.",
      "Incorrect: Potassium dynamics affect repolarization but are not the primary cause here."
    ],
    "slideLink": "Nerve.pdf (Slide: Effects of demyelination)"
  },
  {
    "question": "In terms of thermoregulatory feedback, which of the following best describes the role of peripheral thermoreceptors?",
    "options": [
      "A) Detect internal blood temperature",
      "B) Initiate non-shivering thermogenesis",
      "C) Monitor external temperature changes",
      "D) Generate core body heat",
      "E) Modulate hypothalamic vasopressin release"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Central thermoreceptors monitor blood temperature.",
      "Incorrect: Non-shivering thermogenesis is triggered centrally.",
      "Correct: Peripheral receptors in skin detect environmental temperature shifts to initiate feedback.",
      "Incorrect: Heat is generated by metabolic and muscular activity, not by receptors.",
      "Incorrect: Vasopressin release is related to osmoregulation, not thermal input."
    ],
    "slideLink": "Thermoregulation and the Autonomic Nervous System Med1028 upload.pdf (Slide: Peripheral vs central thermoreceptors)"
  },
  {
    "question": "What feature of tight junctions enables selective permeability across epithelial layers?",
    "options": [
      "A) Connexins forming hydrophilic pores",
      "B) Cadherin-mediated adhesion",
      "C) Claudin protein diversity",
      "D) Integrin binding to ECM",
      "E) Desmin-mediated cytoskeletal anchoring"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Connexins are components of gap junctions.",
      "Incorrect: Cadherins are found in adherens junctions.",
      "Correct: Different claudin proteins determine junctional ion and solute permeability.",
      "Incorrect: Integrins mediate cell-ECM adhesion, not junction permeability.",
      "Incorrect: Desmin is a type of intermediate filament, not junctional protein."
    ],
    "slideLink": "Cell Membrane & Ion Transport (Slide: Tight junction proteins)"
  },
  {
    "question": "A patient has a defect in the dynein motor protein. Which of the following functions is most likely impaired?",
    "options": [
      "A) Mitochondrial fusion",
      "B) Retrograde axonal transport",
      "C) Actin filament polymerization",
      "D) Protein synthesis at the rough ER",
      "E) Intracellular calcium buffering"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Mitochondrial fusion is regulated by mitofusins, not motor proteins.",
      "Correct: Dynein mediates retrograde (toward the soma) transport along microtubules.",
      "Incorrect: Actin polymerization is actin-specific and unrelated to dynein.",
      "Incorrect: Rough ER function is independent of dynein.",
      "Incorrect: Calcium buffering is handled by organelles like the ER and mitochondria."
    ],
    "slideLink": "Divisions of the Nervous System.pdf (Slide: Axonal transport)"
  },
  {
    "question": "Why is slow, graded depolarization at the axon hillock insufficient to generate an action potential?",
    "options": [
      "A) Lack of voltage-gated sodium channels",
      "B) Absence of neurotransmitter receptors",
      "C) Excess potassium efflux",
      "D) Inactivation of sodium-potassium ATPase",
      "E) Subthreshold membrane potential"
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorrect: The axon hillock is rich in voltage-gated sodium channels.",
      "Incorrect: Receptors are found on dendrites, not involved here.",
      "Incorrect: Potassium efflux affects repolarization, not threshold initiation.",
      "Incorrect: The Na⁺/K⁺ ATPase maintains gradients but does not directly initiate APs.",
      "Correct: If the graded depolarization doesn’t reach threshold, no AP is triggered."
    ],
    "slideLink": "Nerve.pdf (Slide: Action potential initiation)"
  },
  {
    "question": "Which process is directly impaired in hereditary spherocytosis due to spectrin deficiency?",
    "options": [
      "A) Ribosomal RNA transcription",
      "B) Cytokinesis during mitosis",
      "C) Membrane structural integrity",
      "D) Lysosomal protein degradation",
      "E) Oxidative phosphorylation"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: RNA transcription occurs in the nucleus and is unrelated.",
      "Incorrect: Cytokinesis is actin-dependent, not spectrin-related.",
      "Correct: Spectrin stabilizes the red cell membrane; its loss leads to spherical, fragile RBCs.",
      "Incorrect: Lysosomal degradation is unaffected by spectrin.",
      "Incorrect: Oxidative phosphorylation occurs in mitochondria and is unrelated."
    ],
    "slideLink": "Lecture 12 – Cytoskeleton (Slide: Spectrin and red cells)"
  },
  {
    "question": "Which best describes the mechanism of action of heat loss through sweating?",
    "options": [
      "A) Radiation of heat via blood vessels",
      "B) Conduction into cooler air",
      "C) Convection due to wind currents",
      "D) Evaporation of water from skin surface",
      "E) Vasodilation of deep arteries"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Radiation occurs without fluid loss and is passive.",
      "Incorrect: Conduction is minor compared to evaporation.",
      "Incorrect: Convection transfers air but doesn’t explain sweating.",
      "Correct: Evaporation of sweat uses heat energy from the body, resulting in cooling.",
      "Incorrect: Vasodilation supports heat transfer but doesn’t explain sweat cooling."
    ],
    "slideLink": "Thermoregulation and the Autonomic Nervous System (Slide: Mechanisms of heat loss)"
  },
  {
    "question": "In a feedback loop, which component compares incoming signals to a set point?",
    "options": [
      "A) Effector",
      "B) Receptor",
      "C) Comparator",
      "D) Motor neuron",
      "E) Reflex arc"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: The effector produces the response, not the comparison.",
      "Incorrect: Receptors detect changes but don’t compare them.",
      "Correct: The comparator (often the hypothalamus) compares the signal to the desired value.",
      "Incorrect: Motor neurons transmit signals but don’t integrate data.",
      "Incorrect: Reflex arcs involve direct responses, not regulation."
    ],
    "slideLink": "Homeostasis and Control Systems (Slide: Feedback system components)"
  },
  {
    "question": "Which joint type permits multiaxial movement, including flexion, extension, rotation, and circumduction?",
    "options": [
      "A) Hinge joint",
      "B) Plane joint",
      "C) Ball and socket joint",
      "D) Pivot joint",
      "E) Saddle joint"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Hinge joints allow movement in one plane only (e.g., elbow).",
      "Incorrect: Plane joints allow sliding movement.",
      "Correct: Ball and socket joints (e.g., shoulder, hip) permit the widest range of motion.",
      "Incorrect: Pivot joints allow rotation around one axis.",
      "Incorrect: Saddle joints are biaxial (e.g., thumb base), not multiaxial."
    ],
    "slideLink": "Practical 05b Overview of Joints (Slide: Synovial joint types)"
  },
  {
    "question": "In an inflammatory response, which molecule is responsible for increased vascular permeability?",
    "options": [
      "A) Interleukin-1",
      "B) Histamine",
      "C) Tumor necrosis factor-alpha",
      "D) Interferon-gamma",
      "E) Complement C3b"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: IL-1 promotes fever and leukocyte adhesion but not permeability.",
      "Correct: Histamine, released by mast cells, increases capillary permeability during early inflammation.",
      "Incorrect: TNF-α activates endothelium but histamine is the permeability mediator.",
      "Incorrect: IFN-γ activates macrophages, not permeability.",
      "Incorrect: C3b is involved in opsonization, not permeability."
    ],
    "slideLink": "Histopathology - Inflammation (Slide: Chemical mediators)"
  },
  {
    "question": "What anatomical feature differentiates glabrous from non-glabrous skin in thermoregulatory control?",
    "options": [
      "A) Presence of sweat glands",
      "B) Absence of arteriovenous anastomoses",
      "C) High density of sebaceous glands",
      "D) Dense capillary beds in epidermis",
      "E) Presence of melanocytes"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Both glabrous and non-glabrous skin have sweat glands.",
      "Correct: Non-glabrous skin lacks arteriovenous anastomoses, which are present in glabrous areas like palms and soles.",
      "Incorrect: Sebaceous glands are present in both types but not distinguishing.",
      "Incorrect: Capillaries reside in the dermis, and density doesn’t define these skin types.",
      "Incorrect: Melanocytes are present in both, contributing to pigmentation."
    ],
    "slideLink": "Thermoregulation and the Autonomic Nervous System Med1028 upload.pdf (Slide: Glabrous vs Non-glabrous skin)"
  },
  {
    "question": "During the sympathetic release test, what core body temperature threshold signals the endpoint of the heating phase?",
    "options": [
      "A) 36.3°C",
      "B) 37.0°C",
      "C) 37.5°C",
      "D) 37.8°C",
      "E) 38.5°C"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: This is below the endpoint threshold.",
      "Incorrect: This is normal core temperature.",
      "Incorrect: This is near the upper normal limit but not the threshold for test termination.",
      "Correct: 37.8°C is the defined upper threshold for stopping the heating phase in the test.",
      "Incorrect: 38.5°C exceeds the safe testing range."
    ],
    "slideLink": "Thermoregulation and the Autonomic Nervous System Med1028 upload.pdf (Slide: Sympathetic Release Test Protocol)"
  },
  {
    "question": "Which anatomical structure directly synapses with postganglionic parasympathetic neurons within target organs?",
    "options": [
      "A) Dorsal root ganglia",
      "B) Sympathetic chain",
      "C) Cranial nerve nuclei",
      "D) Intramural ganglia",
      "E) Adrenal medulla"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Dorsal root ganglia contain sensory neuron cell bodies, not part of ANS.",
      "Incorrect: Sympathetic chain is specific to the sympathetic division.",
      "Incorrect: These are origins of preganglionic parasympathetic neurons.",
      "Correct: Intramural ganglia are located within or near the wall of target organs.",
      "Incorrect: The adrenal medulla is part of the sympathetic system."
    ],
    "slideLink": "Divisions of the Nervous System.pdf (Slide: Parasympathetic ganglia anatomy)"
  },
  {
    "question": "Which cutaneous vascular mechanism is primarily responsible for thermoregulation during heating in glabrous skin?",
    "options": [
      "A) Cholinergic vasodilation",
      "B) Passive vasodilation via decreased sympathetic tone",
      "C) Activation of beta-2 adrenergic receptors",
      "D) Increased perfusion via arteriolar constriction",
      "E) Endothelin-mediated vasoconstriction"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Cholinergic vasodilation is found in non-glabrous skin.",
      "Correct: In glabrous skin, blood flow increases passively due to withdrawal of tonic vasoconstrictor input.",
      "Incorrect: Beta-2 activation does not primarily control cutaneous vessels.",
      "Incorrect: Constriction would reduce perfusion, not increase it.",
      "Incorrect: Endothelin causes vasoconstriction, not vasodilation."
    ],
    "slideLink": "Thermoregulation and the Autonomic Nervous System Med1028 upload.pdf (Slide: Control of skin blood flow by temperature)"
  },
  {
    "question": "What feature differentiates a pivot synovial joint from a hinge joint?",
    "options": [
      "A) It allows only extension and flexion",
      "B) It is reinforced by a fibrous capsule",
      "C) It allows rotational movement around a longitudinal axis",
      "D) It lacks a synovial cavity",
      "E) It is only present in the vertebral column"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Hinge joints allow this, but pivot joints do not.",
      "Incorrect: Both joint types are reinforced by fibrous capsules.",
      "Correct: Pivot joints (e.g., proximal radioulnar joint) permit rotation around a single axis.",
      "Incorrect: All synovial joints have a cavity.",
      "Incorrect: Pivot joints also exist in the forearm."
    ],
    "slideLink": "Practical 05b Overview of Joints.pdf (Slide: Types of synovial joints)"
  },
  {
    "question": "Which cells are dominant in eosinophil-rich inflammation such as seen in Type I hypersensitivity?",
    "options": [
      "A) Neutrophils",
      "B) Plasma cells",
      "C) Eosinophils",
      "D) Macrophages",
      "E) Basophils"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Neutrophils dominate acute inflammation, not hypersensitivity reactions.",
      "Incorrect: Plasma cells are more prominent in chronic inflammation.",
      "Correct: Eosinophils are key players in allergic responses and eosinophilic conditions.",
      "Incorrect: Macrophages are central in granulomas and chronic inflammation.",
      "Incorrect: Basophils play a minor role compared to eosinophils."
    ],
    "slideLink": "Histopathology - Inflammation.pdf (Slide: Eosinophil-rich inflammation)"
  },
  {
    "question": "Which histological hallmark is used to confirm a diagnosis of tuberculosis in granulomatous inflammation?",
    "options": [
      "A) Presence of eosinophils",
      "B) Positive Ziel-Neelson stain",
      "C) Psammoma bodies",
      "D) Keratin pearls",
      "E) Russell bodies"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Eosinophils are not specific for tuberculosis.",
      "Correct: Ziel-Neelson stain identifies acid-fast bacilli, confirming TB.",
      "Incorrect: Psammoma bodies occur in some cancers.",
      "Incorrect: Keratin pearls are seen in squamous cell carcinoma.",
      "Incorrect: Russell bodies are associated with plasma cells in chronic inflammation."
    ],
    "slideLink": "Histopathology - Inflammation.pdf (Slide: Caseous necrosis and stains)"
  },
  {
    "question": "Which type of autonomic reflex arc operates without direct involvement of the central nervous system?",
    "options": [
      "A) Extrinsic reflex arc",
      "B) Monosynaptic reflex arc",
      "C) Parasympathetic reflex arc",
      "D) Enteric (intrinsic) reflex arc",
      "E) Baroreflex arc"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Extrinsic arcs rely on CNS integration.",
      "Incorrect: This applies to somatic not autonomic reflexes.",
      "Incorrect: Parasympathetic reflexes still involve the CNS.",
      "Correct: Enteric reflex arcs can be completely intrinsic, localized to the gut.",
      "Incorrect: Baroreflex is a classic CNS-mediated autonomic reflex."
    ],
    "slideLink": "Homeostasis and Control Systems upload.pdf (Slide: Intrinsic vs extrinsic control)"
  },
  {
    "question": "In the sympathetic release test, what is one valid endpoint for terminating the heating phase?",
    "options": [
      "A) Patient core temp below 35°C",
      "B) 3 consecutive increases in forehead temp",
      "C) Subject distress",
      "D) Plateau of hand temperature",
      "E) Blood pressure >180/110 mmHg"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Hypothermia is not part of the heating criteria.",
      "Incorrect: Forehead temp is not the main measurement endpoint.",
      "Correct: Ethical termination is triggered by subject discomfort/distress.",
      "Incorrect: Hand temperature plateau is part of interpretation, not a strict endpoint.",
      "Incorrect: Hypertension isn't monitored in this test per protocol."
    ],
    "slideLink": "Thermoregulation and the Autonomic Nervous System Med1028 upload.pdf (Slide: Experimental protocol endpoints)"
  },
  {
    "question": "Which layer is primarily affected in psoriasis, leading to thickened epidermis with retained nuclei?",
    "options": [
      "A) Stratum basale",
      "B) Stratum granulosum",
      "C) Stratum corneum",
      "D) Dermis",
      "E) Hypodermis"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Stratum basale undergoes more division but isn’t the primary lesion site.",
      "Incorrect: The granular layer is diminished rather than affected directly.",
      "Correct: Parakeratosis in psoriasis results in retention of nuclei in the thickened stratum corneum.",
      "Incorrect: Inflammatory infiltrates can occur in the dermis but the hallmark is epidermal.",
      "Incorrect: Psoriasis does not primarily affect subcutaneous tissue."
    ],
    "slideLink": "Histopathology - Inflammation.pdf (Slide: Psoriasis histological features)"
  },
  {
    "question": "Which neurotransmitter is released by postganglionic sympathetic neurons at most effector organs?",
    "options": [
      "A) Acetylcholine",
      "B) Dopamine",
      "C) Norepinephrine",
      "D) Serotonin",
      "E) Epinephrine"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Acetylcholine is used by parasympathetic neurons and sweat glands.",
      "Incorrect: Dopamine plays a role in the CNS and some specific pathways like the renal vascular bed.",
      "Correct: Norepinephrine is the main neurotransmitter released by postganglionic sympathetic neurons.",
      "Incorrect: Serotonin is mainly found in the GI tract and CNS.",
      "Incorrect: Epinephrine is primarily secreted by the adrenal medulla, not neurons."
    ],
    "slideLink": "Divisions of the Nervous System.pdf (Slide: Autonomic Nervous System)"
  },
  {
    "question": "Which immune cell type is the first to arrive at the site of acute inflammation?",
    "options": [
      "A) Lymphocytes",
      "B) Macrophages",
      "C) Eosinophils",
      "D) Neutrophils",
      "E) Basophils"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Lymphocytes are involved in chronic inflammation and adaptive immunity.",
      "Incorrect: Macrophages arrive later and orchestrate the inflammatory response.",
      "Incorrect: Eosinophils are mainly involved in parasitic infections and allergies.",
      "Correct: Neutrophils are the first responders to acute inflammation and are rapidly recruited.",
      "Incorrect: Basophils play a role in allergic reactions but are not first responders."
    ],
    "slideLink": "Histopathology - Inflammation.pdf (Slide: Acute inflammation cell types)"
  },
  {
    "question": "Which immune cell type is most associated with chronic inflammation rather than acute?",
    "options": [
      "A) Neutrophils",
      "B) Basophils",
      "C) Macrophages",
      "D) Eosinophils",
      "E) Platelets"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Neutrophils dominate in acute inflammation.",
      "Incorrect: Basophils are involved in allergic responses.",
      "Correct: Macrophages are key players in chronic inflammation due to their ability to secrete cytokines and phagocytose debris.",
      "Incorrect: Eosinophils are more involved in parasitic infections and allergy.",
      "Incorrect: Platelets are primarily involved in clotting, not inflammation."
    ],
    "slideLink": "Histopathology - Inflammation (Slide: Chronic inflammation)"
  },
  {
    "question": "Which of the following describes the location and role of the lateral horn of the spinal cord?",
    "options": [
      "A) Present at all levels and contains somatic motor neurons",
      "B) Present only in cervical segments and processes sensory input",
      "C) Found in thoracic and upper lumbar regions and contains sympathetic neurons",
      "D) Located in sacral segments and controls parasympathetic output",
      "E) Present only at C1 and controls proprioception"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: The lateral horn is not present at all levels.",
      "Incorrect: It is not exclusive to cervical segments nor is it sensory.",
      "Correct: The lateral horn contains preganglionic sympathetic neurons from T1-L2.",
      "Incorrect: Parasympathetic neurons are found in sacral segments but not in the lateral horn.",
      "Incorrect: C1 is not specifically responsible for proprioception."
    ],
    "slideLink": "Divisions of the Nervous System (Slide: Lateral horn anatomy)"
  },
  {
    "question": "Which cytokine is most involved in initiating the acute-phase response during inflammation?",
    "options": [
      "A) IL-4",
      "B) IL-10",
      "C) IL-1",
      "D) IL-12",
      "E) IL-2"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: IL-4 is involved in B-cell activation and allergic responses.",
      "Incorrect: IL-10 is anti-inflammatory.",
      "Correct: IL-1 is a key mediator that stimulates fever and hepatic acute-phase protein production.",
      "Incorrect: IL-12 is involved in NK cell activation and Th1 responses.",
      "Incorrect: IL-2 is central to T-cell proliferation."
    ],
    "slideLink": "Histopathology - Inflammation (Slide: Acute phase cytokines)"
  },
  {
    "question": "What is the main histological feature distinguishing granulomatous inflammation?",
    "options": [
      "A) Dense eosinophilic infiltrate",
      "B) Suppurative exudate",
      "C) Aggregates of activated macrophages",
      "D) Presence of neutrophil abscesses",
      "E) Extensive fibrin deposition"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Eosinophils are more characteristic of parasitic infections or allergies.",
      "Incorrect: Suppurative exudates are seen in acute purulent inflammation.",
      "Correct: Granulomas consist of tightly clustered epithelioid macrophages, often with multinucleated giant cells.",
      "Incorrect: Abscesses are characteristic of acute, not granulomatous, inflammation.",
      "Incorrect: Fibrin is associated with fibrinous inflammation."
    ],
    "slideLink": "Histopathology - Inflammation (Slide: Granulomatous inflammation)"
  },
  {
    "question": "Which enzyme converts norepinephrine to epinephrine in the adrenal medulla?",
    "options": [
      "A) Monoamine oxidase",
      "B) Dopamine beta-hydroxylase",
      "C) Catechol-O-methyltransferase",
      "D) Phenylethanolamine N-methyltransferase",
      "E) Tyrosine hydroxylase"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: MAO breaks down monoamines, not involved in synthesis.",
      "Incorrect: This converts dopamine to norepinephrine.",
      "Incorrect: COMT inactivates catecholamines via methylation.",
      "Correct: PNMT catalyzes the methylation of norepinephrine to form epinephrine.",
      "Incorrect: Tyrosine hydroxylase acts earlier, converting tyrosine to L-DOPA."
    ],
    "slideLink": "Homeostasis and Control Systems (Slide: Adrenal medulla synthesis)"
  },
  {
    "question": "Which structure in the brain is essential for the baroreceptor reflex pathway?",
    "options": [
      "A) Hypothalamus",
      "B) Cerebellum",
      "C) Nucleus tractus solitarius",
      "D) Substantia nigra",
      "E) Hippocampus"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Hypothalamus regulates temperature and hormones, not baroreflex.",
      "Incorrect: Cerebellum controls movement and coordination.",
      "Correct: NTS integrates sensory input from baroreceptors for cardiovascular reflexes.",
      "Incorrect: Substantia nigra is involved in movement control via dopamine.",
      "Incorrect: Hippocampus is important for memory, not autonomic control."
    ],
    "slideLink": "Homeostasis and Control Systems (Slide: Baroreflex circuitry)"
  },
  {
    "question": "What type of tissue primarily comprises the annulus fibrosus of intervertebral discs?",
    "options": [
      "A) Elastic cartilage",
      "B) Hyaline cartilage",
      "C) Fibrocartilage",
      "D) Dense irregular connective tissue",
      "E) Loose connective tissue"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Elastic cartilage is found in the ear and epiglottis.",
      "Incorrect: Hyaline cartilage is in articular surfaces, not discs.",
      "Correct: Annulus fibrosus contains concentric layers of fibrocartilage for tensile strength.",
      "Incorrect: Dense irregular CT supports dermis, not discs.",
      "Incorrect: Loose CT is not mechanically strong enough for this role."
    ],
    "slideLink": "Practical 05b Overview of Joints (Slide: Intervertebral disc structure)"
  },
  {
    "question": "Which cytokine is predominantly involved in granuloma formation during chronic inflammation?",
    "options": [
      "A) IL-2",
      "B) IL-4",
      "C) IFN-gamma",
      "D) TNF-alpha",
      "E) IL-10"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: IL-2 is involved in T cell proliferation.",
      "Incorrect: IL-4 promotes B cell class switching to IgE.",
      "Correct: IFN-gamma activates macrophages and promotes granuloma formation.",
      "Incorrect: TNF-alpha is pro-inflammatory but not specific to granulomas.",
      "Incorrect: IL-10 is anti-inflammatory and inhibits macrophages."
    ],
    "slideLink": "Histopathology - Inflammation (Slide: Chronic inflammation and granulomas)"
  },
  {
    "question": "Which muscle type is predominantly under involuntary control and has a single central nucleus?",
    "options": [
      "A) Skeletal muscle",
      "B) Cardiac muscle",
      "C) Smooth muscle",
      "D) Multinucleated striated muscle",
      "E) Myoepithelial cells"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Skeletal muscle is voluntary and multinucleated.",
      "Incorrect: Cardiac muscle is involuntary but has intercalated discs and branching fibers.",
      "Correct: Smooth muscle is non-striated, involuntary, and has a central nucleus.",
      "Incorrect: This describes skeletal muscle.",
      "Incorrect: Myoepithelial cells assist gland secretion, not a full muscle type."
    ],
    "slideLink": "Divisions of the Nervous System (Slide: Muscle tissue comparison)"
  },
  {
    "question": "Which neurotransmitter is released by preganglionic sympathetic neurons?",
    "options": [
      "A) Norepinephrine",
      "B) Acetylcholine",
      "C) Dopamine",
      "D) Serotonin",
      "E) Glutamate"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Norepinephrine is released by postganglionic sympathetic neurons.",
      "Correct: Preganglionic sympathetic neurons release acetylcholine at nicotinic receptors.",
      "Incorrect: Dopamine is more relevant in CNS and renal vasculature.",
      "Incorrect: Serotonin is a CNS neurotransmitter, not autonomic.",
      "Incorrect: Glutamate is excitatory but not used in autonomic ganglia."
    ],
    "slideLink": "Thermoregulation and the Autonomic Nervous System (Slide: ANS pathways)"
  },
  {
    "question": "Which protein initiates the intrinsic pathway of apoptosis by responding to DNA damage?",
    "options": [
      "A) BCL-2",
      "B) Caspase-8",
      "C) p53",
      "D) Fas ligand",
      "E) Cytochrome P450"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: BCL-2 is anti-apoptotic.",
      "Incorrect: Caspase-8 is part of the extrinsic pathway.",
      "Correct: p53 triggers apoptosis by activating pro-apoptotic proteins when DNA is damaged.",
      "Incorrect: Fas ligand activates extrinsic apoptosis via death receptors.",
      "Incorrect: Cytochrome P450 is involved in metabolism, not apoptosis."
    ],
    "slideLink": "Cell Death and Cancer Therapy (Slide: p53 and intrinsic apoptosis)"
  },
  {
    "question": "Which of the following substances is primarily responsible for causing fever in acute inflammation?",
    "options": [
      "A) Histamine",
      "B) Prostaglandin E2",
      "C) Bradykinin",
      "D) Leukotriene B4",
      "E) IL-4"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Histamine mediates vasodilation and permeability.",
      "Correct: PGE2 acts on the hypothalamus to raise the thermoregulatory set point.",
      "Incorrect: Bradykinin contributes to pain and vasodilation, not fever.",
      "Incorrect: LTB4 is a chemotactic agent, not pyrogenic.",
      "Incorrect: IL-4 is associated with allergic responses."
    ],
    "slideLink": "Histopathology - Inflammation (Slide: Fever mediators)"
  },
  {
    "question": "Which skin layer contains the cells responsible for initiating sensory input from tactile stimuli?",
    "options": [
      "A) Stratum corneum",
      "B) Stratum granulosum",
      "C) Stratum spinosum",
      "D) Stratum basale",
      "E) Dermis"
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorrect: The stratum corneum is composed of dead cells.",
      "Incorrect: Granulosum is a transitional layer during keratinization.",
      "Incorrect: Spinosum contains desmosomes but not sensory receptors.",
      "Incorrect: Basale contains mitotically active cells, not sensory structures.",
      "Correct: The dermis contains Merkel cells and nerve endings for sensation."
    ],
    "slideLink": "Skin and Barrier Functions (Slide: Skin structure and innervation)"
  },
  {
    "question": "Which of the following is the main factor driving fluid movement out of capillaries at the arteriolar end?",
    "options": [
      "A) Capillary oncotic pressure",
      "B) Interstitial oncotic pressure",
      "C) Capillary hydrostatic pressure",
      "D) Lymphatic pressure",
      "E) Plasma protein concentration"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Oncotic pressure pulls fluid in.",
      "Incorrect: Interstitial oncotic pressure is minimal and not the main driver.",
      "Correct: Hydrostatic pressure pushes fluid out of the capillary into the interstitium.",
      "Incorrect: Lymphatics remove excess fluid but don’t influence outward flow.",
      "Incorrect: Plasma proteins create oncotic pressure opposing this movement."
    ],
    "slideLink": "Homeostasis and Control Systems (Slide: Starling forces)"
  },
  {
    "question": "Which joint type allows for flexion, extension, abduction, and adduction?",
    "options": [
      "A) Hinge joint",
      "B) Saddle joint",
      "C) Plane joint",
      "D) Pivot joint",
      "E) Ball and socket joint"
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorrect: Hinge joints allow only flexion and extension.",
      "Incorrect: Saddle joints allow movement in two planes but not full rotation.",
      "Incorrect: Plane joints only allow gliding.",
      "Incorrect: Pivot joints allow rotation around a single axis.",
      "Correct: Ball and socket joints allow movement in multiple directions and rotation."
    ],
    "slideLink": "Practical 05b Overview of Joints (Slide: Joint classification)"
  },
  {
    "question": "Which structural protein forms desmosomes in epithelial tissue?",
    "options": [
      "A) Claudin",
      "B) Occludin",
      "C) Cadherin",
      "D) Integrin",
      "E) Connexin"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Claudin is involved in tight junctions.",
      "Incorrect: Occludin also contributes to tight junction sealing.",
      "Correct: Cadherins form the adhesive component of desmosomes between epithelial cells.",
      "Incorrect: Integrins link cells to the ECM.",
      "Incorrect: Connexins form gap junctions, not desmosomes."
    ],
    "slideLink": "Histopathology - Inflammation (Slide: Epithelial junctions)"
  },
  {
    "question": "In which part of the brain is cerebrospinal fluid primarily produced?",
    "options": [
      "A) Cerebral cortex",
      "B) Subarachnoid space",
      "C) Choroid plexus",
      "D) Corpus callosum",
      "E) Pituitary gland"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Cortex handles higher cognitive function.",
      "Incorrect: CSF flows through this space but is not produced here.",
      "Correct: The choroid plexus in the ventricles secretes CSF.",
      "Incorrect: The corpus callosum connects hemispheres, not involved in CSF production.",
      "Incorrect: Pituitary releases hormones, unrelated to CSF."
    ],
    "slideLink": "Divisions of the Nervous System (Slide: CSF circulation)"
  },
  {
    "question": "Which class of drug inhibits bacterial transpeptidase enzymes?",
    "options": [
      "A) Macrolides",
      "B) Aminoglycosides",
      "C) Cephalosporins",
      "D) Tetracyclines",
      "E) Fluoroquinolones"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Macrolides inhibit protein synthesis.",
      "Incorrect: Aminoglycosides bind 30S ribosome.",
      "Correct: Cephalosporins are β-lactams that block transpeptidation in cell wall synthesis.",
      "Incorrect: Tetracyclines block tRNA binding to the 30S subunit.",
      "Incorrect: Fluoroquinolones inhibit DNA gyrase, not peptidoglycan synthesis."
    ],
    "slideLink": "Cell Death and Cancer Therapy (Slide: Antibiotics and targets)"
  },
  {
    "question": "Which of the following skin cells act as antigen-presenting cells?",
    "options": [
      "A) Keratinocytes",
      "B) Merkel cells",
      "C) Langerhans cells",
      "D) Melanocytes",
      "E) Fibroblasts"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Keratinocytes form the barrier layer.",
      "Incorrect: Merkel cells are mechanoreceptors.",
      "Correct: Langerhans cells capture antigens and migrate to lymph nodes.",
      "Incorrect: Melanocytes produce melanin but don’t present antigen.",
      "Incorrect: Fibroblasts produce ECM, not involved in immune presentation."
    ],
    "slideLink": "Skin and Barrier Functions (Slide: Epidermal immune surveillance)"
  },
  {
    "question": "Which nerve fiber type conducts pain and temperature signals slowly and unmyelinated?",
    "options": [
      "A) A-alpha fibers",
      "B) A-delta fibers",
      "C) B fibers",
      "D) C fibers",
      "E) A-beta fibers"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: A-alpha fibers are fast motor neurons.",
      "Incorrect: A-delta fibers conduct fast pain, not slow.",
      "Incorrect: B fibers are preganglionic autonomic fibers.",
      "Correct: C fibers are unmyelinated, slow-conducting, and carry dull pain and temperature.",
      "Incorrect: A-beta fibers transmit touch and pressure sensations."
    ],
    "slideLink": "Divisions of the Nervous System (Slide: Fiber types and conduction)"
  },
  {
    "question": "Which hormone stimulates reabsorption of sodium and secretion of potassium in the distal nephron?",
    "options": [
      "A) Cortisol",
      "B) Vasopressin",
      "C) Aldosterone",
      "D) Parathyroid hormone",
      "E) Angiotensin II"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Cortisol has glucocorticoid actions, not electrolyte balance.",
      "Incorrect: Vasopressin promotes water reabsorption via aquaporins.",
      "Correct: Aldosterone enhances sodium reabsorption and potassium excretion in the distal tubule and collecting duct.",
      "Incorrect: PTH increases calcium reabsorption, not sodium.",
      "Incorrect: Angiotensin II promotes aldosterone release but does not act directly."
    ],
    "slideLink": "Homeostasis and Control Systems (Slide: RAAS and aldosterone)"
  },
  {
    "question": "Which enzyme deficiency is responsible for homocystinuria as discussed in Case 1?",
    "options": [
      "A) Phenylalanine hydroxylase",
      "B) Ornithine transcarbamylase",
      "C) Cystathionine-β-synthase",
      "D) Tyrosinase",
      "E) Galactose-1-phosphate uridyltransferase"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: This enzyme is involved in phenylketonuria.",
      "Incorrect: This is involved in urea cycle disorders.",
      "Correct: Homocystinuria results from a deficiency of cystathionine-β-synthase, leading to excess homocysteine.",
      "Incorrect: Tyrosinase deficiency is linked to albinism.",
      "Incorrect: This enzyme is defective in classic galactosemia."
    ],
    "slideLink": "Case 1 Overview 2024 (Slide: Homocystinuria biochemistry)"
  },
  {
    "question": "Which of the following correctly describes a primary cartilaginous joint?",
    "options": [
      "A) Pubic symphysis",
      "B) Epiphyseal growth plate",
      "C) Glenohumeral joint",
      "D) Radioulnar interosseous membrane",
      "E) Atlantoaxial joint"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: The pubic symphysis is a secondary cartilaginous joint.",
      "Correct: The epiphyseal growth plate is a synchondrosis, a type of primary cartilaginous joint.",
      "Incorrect: This is a synovial ball-and-socket joint.",
      "Incorrect: This is a fibrous joint (syndesmosis).",
      "Incorrect: This is a pivot synovial joint."
    ],
    "slideLink": "Practical 05b Overview of Joints (Slide: Cartilaginous joints)"
  },
  {
    "question": "Which type of muscle fiber is best suited for postural support?",
    "options": [
      "A) Type I",
      "B) Type IIa",
      "C) Type IIb",
      "D) Type III",
      "E) Type IV"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: Type I fibers are slow-twitch, fatigue-resistant, and ideal for postural support.",
      "Incorrect: Type IIa fibers are intermediate but not as fatigue-resistant.",
      "Incorrect: Type IIb fibers are fast-twitch and fatigue quickly.",
      "Incorrect: There is no type III classification in muscle fiber types.",
      "Incorrect: Type IV is not a recognized muscle fiber classification."
    ],
    "slideLink": "Muscle Contraction Lecture (Slide: Muscle fiber types)"
  },
  {
    "question": "In the sliding filament model of muscle contraction, what does calcium bind to?",
    "options": [
      "A) Tropomyosin",
      "B) Troponin C",
      "C) Myosin light chain",
      "D) Actin",
      "E) Myosin heavy chain"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Tropomyosin blocks binding sites but doesn’t bind calcium.",
      "Correct: Calcium binds to troponin C, causing a conformational change to move tropomyosin.",
      "Incorrect: Myosin light chain is involved in smooth muscle contraction, not calcium binding here.",
      "Incorrect: Actin interacts with myosin but doesn't bind calcium.",
      "Incorrect: Myosin heavy chain forms the thick filament but doesn't bind calcium."
    ],
    "slideLink": "Muscle Contraction Lecture (Slide: Calcium and troponin)"
  },
  {
    "question": "Which mitochondrial structure is most important for ATP production?",
    "options": [
      "A) Outer membrane",
      "B) Cristae",
      "C) Matrix",
      "D) Intermembrane space",
      "E) Lipid bilayer"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: The outer membrane is permeable and does not host the electron transport chain.",
      "Correct: The cristae contain enzymes of the electron transport chain for ATP synthesis.",
      "Incorrect: The matrix is important for Krebs cycle but not directly for ATP synthesis.",
      "Incorrect: This holds protons for gradient formation, but not the ATP-producing enzymes.",
      "Incorrect: The bilayer is part of structure but not functionally specific for ATP."
    ],
    "slideLink": "Lecture – Cell Organelles (Slide: Mitochondria structure)"
  },
  {
    "question": "Which ion is responsible for the depolarisation phase of the neuronal action potential?",
    "options": [
      "A) Potassium",
      "B) Calcium",
      "C) Sodium",
      "D) Chloride",
      "E) Magnesium"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Potassium efflux causes repolarisation, not depolarisation.",
      "Incorrect: Calcium plays a role in neurotransmitter release, not depolarisation.",
      "Correct: Sodium influx through voltage-gated channels causes rapid depolarisation.",
      "Incorrect: Chloride influx hyperpolarises the membrane.",
      "Incorrect: Magnesium is a cofactor in enzymatic reactions, not involved in depolarisation."
    ],
    "slideLink": "Nerve.pdf (Slide: Action potential mechanism)"
  },
  {
    "question": "Which of the following is true regarding the stretch reflex?",
    "options": [
      "A) It is a polysynaptic reflex involving interneurons.",
      "B) It is inhibited by gamma motor neurons.",
      "C) It is a monosynaptic reflex involving muscle spindles.",
      "D) It causes relaxation of the agonist muscle.",
      "E) It is responsible for pain withdrawal."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: The stretch reflex is monosynaptic.",
      "Incorrect: Gamma motor neurons enhance spindle sensitivity.",
      "Correct: The stretch reflex is monosynaptic and involves activation of alpha motor neurons via muscle spindle input.",
      "Incorrect: The agonist contracts, not relaxes.",
      "Incorrect: Pain withdrawal is mediated by a polysynaptic flexor reflex."
    ],
    "slideLink": "Divisions of the Nervous System.pdf (Slide: Reflex arcs)"
  },
  {
    "question": "Which layer of the epidermis is responsible for producing keratin?",
    "options": [
      "A) Stratum corneum",
      "B) Stratum basale",
      "C) Stratum spinosum",
      "D) Stratum granulosum",
      "E) Stratum lucidum"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: This is the outermost layer of dead cells.",
      "Incorrect: Basale is where cell division occurs.",
      "Incorrect: Spinosum contributes to protein synthesis but not peak keratin production.",
      "Correct: Stratum granulosum contains keratohyalin granules involved in keratin production.",
      "Incorrect: Lucidum is present in thick skin but not the primary keratin site."
    ],
    "slideLink": "Histopathology - Inflammation.pdf (Slide: Epidermal layers)"
  },
  {
    "question": "Which process is primarily responsible for the formation of pus in acute inflammation?",
    "options": [
      "A) Lymphocyte recruitment",
      "B) Fibroblast activation",
      "C) Neutrophil apoptosis and degradation",
      "D) Platelet aggregation",
      "E) Mast cell degranulation"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Lymphocytes are more involved in chronic inflammation.",
      "Incorrect: Fibroblasts contribute to healing, not pus formation.",
      "Correct: Pus is composed largely of dead neutrophils and their digested debris.",
      "Incorrect: Platelets are involved in coagulation, not pus.",
      "Incorrect: Mast cells release histamine but don’t form pus."
    ],
    "slideLink": "Histopathology - Inflammation.pdf (Slide: Acute inflammation)"
  },
  {
    "question": "What is the primary mechanism by which glucocorticoids suppress inflammation?",
    "options": [
      "A) Direct bacterial killing",
      "B) Inhibition of prostaglandin synthesis",
      "C) Promotion of neutrophil chemotaxis",
      "D) Activation of COX-2 enzyme",
      "E) Stimulation of histamine release"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Glucocorticoids are not antimicrobials.",
      "Correct: Glucocorticoids inhibit phospholipase A2, preventing prostaglandin and leukotriene synthesis.",
      "Incorrect: They suppress immune cell migration.",
      "Incorrect: Glucocorticoids downregulate COX-2 expression.",
      "Incorrect: They reduce histamine release."
    ],
    "slideLink": "Histopathology - Inflammation.pdf (Slide: Anti-inflammatory mechanisms)"
  },
  {
    "question": "Which autonomic division is responsible for pupillary dilation?",
    "options": [
      "A) Parasympathetic via CN III",
      "B) Sympathetic via thoracic spinal nerves",
      "C) Somatic via CN VII",
      "D) Enteric nervous system",
      "E) Parasympathetic via CN X"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: CN III causes pupillary constriction.",
      "Correct: Sympathetic stimulation causes radial muscle contraction and pupillary dilation.",
      "Incorrect: CN VII is involved in facial expression, not pupil control.",
      "Incorrect: The enteric system controls gut motility.",
      "Incorrect: CN X (vagus) is unrelated to ocular innervation."
    ],
    "slideLink": "Thermoregulation and the Autonomic Nervous System.pdf (Slide: Autonomic control of pupil)"
  },
  {
    "question": "What is the function of Type I pneumocytes?",
    "options": [
      "A) Mucus production",
      "B) Surfactant secretion",
      "C) Gas exchange",
      "D) Phagocytosis",
      "E) Ciliary movement"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Mucus is produced by goblet cells.",
      "Incorrect: Surfactant is secreted by Type II pneumocytes.",
      "Correct: Type I pneumocytes are thin and facilitate gas diffusion.",
      "Incorrect: Alveolar macrophages perform phagocytosis.",
      "Incorrect: Ciliary movement occurs in bronchioles, not alveoli."
    ],
    "slideLink": "Lecture – Histology of Lung (Slide: Alveolar cell types)"
  },
  {
    "question": "Which complement protein is most directly responsible for forming the membrane attack complex (MAC)?",
    "options": [
      "A) C1q",
      "B) C3b",
      "C) C5a",
      "D) C9",
      "E) C4"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: C1q initiates the classical pathway.",
      "Incorrect: C3b is involved in opsonisation.",
      "Incorrect: C5a is a potent chemotactic factor.",
      "Correct: C9 polymerises to form pores in the membrane attack complex.",
      "Incorrect: C4 acts upstream in the cascade."
    ],
    "slideLink": "Histopathology - Inflammation.pdf (Slide: Complement cascade)"
  },
  {
    "question": "Which structure carries sensory signals from the face to the CNS?",
    "options": [
      "A) Oculomotor nerve",
      "B) Trigeminal nerve",
      "C) Facial nerve",
      "D) Hypoglossal nerve",
      "E) Glossopharyngeal nerve"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Oculomotor is motor to extraocular muscles.",
      "Correct: The trigeminal nerve (CN V) carries facial sensory information.",
      "Incorrect: Facial nerve is motor to facial muscles.",
      "Incorrect: Hypoglossal is motor to the tongue.",
      "Incorrect: Glossopharyngeal innervates the pharynx and part of the tongue."
    ],
    "slideLink": "Divisions of the Nervous System.pdf (Slide: Cranial nerve functions)"
  },
  {
    "question": "Which protein initiates leukocyte rolling in inflammation?",
    "options": [
      "A) Integrins",
      "B) Selectins",
      "C) ICAM-1",
      "D) PECAM-1",
      "E) Collagen"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Integrins mediate firm adhesion, not rolling.",
      "Correct: Selectins bind to glycoproteins on leukocytes, initiating rolling along endothelium.",
      "Incorrect: ICAM-1 is involved in tight adhesion.",
      "Incorrect: PECAM-1 mediates transmigration.",
      "Incorrect: Collagen is a structural protein, not involved in leukocyte migration."
    ],
    "slideLink": "Histopathology - Inflammation.pdf (Slide: Steps of leukocyte recruitment)"
  },
  {
    "question": "What is the principal neurotransmitter used by postganglionic sympathetic neurons?",
    "options": [
      "A) Acetylcholine",
      "B) Dopamine",
      "C) Norepinephrine",
      "D) Serotonin",
      "E) Epinephrine"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Acetylcholine is used by parasympathetic postganglionic neurons and sympathetic neurons to sweat glands.",
      "Incorrect: Dopamine acts in the CNS and some renal vasculature.",
      "Correct: Norepinephrine is the main neurotransmitter for most sympathetic postganglionic neurons.",
      "Incorrect: Serotonin is mainly involved in CNS and GI tract signalling.",
      "Incorrect: Epinephrine is secreted from the adrenal medulla into the bloodstream."
    ],
    "slideLink": "Thermoregulation and the Autonomic Nervous System.pdf (Slide: Neurotransmitters)"
  },
  {
    "question": "Which connective tissue protein provides tensile strength to tendons?",
    "options": [
      "A) Elastin",
      "B) Keratin",
      "C) Collagen Type I",
      "D) Laminin",
      "E) Fibrillin"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Elastin provides elasticity, not strength.",
      "Incorrect: Keratin is found in skin and epithelial tissues.",
      "Correct: Type I collagen is the predominant structural protein in tendons and ligaments.",
      "Incorrect: Laminin is involved in the basal lamina, not tendons.",
      "Incorrect: Fibrillin is found in elastic fibers, not the main strength component of tendons."
    ],
    "slideLink": "Practical 05b Overview of Joints.pdf (Slide: Tendon histology)"
  },
  {
    "question": "What role do dendritic cells play in initiating immune responses?",
    "options": [
      "A) Killing infected cells directly",
      "B) Activating complement proteins",
      "C) Producing antibodies",
      "D) Presenting antigens to naïve T cells",
      "E) Secreting histamine"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: NK cells perform direct killing.",
      "Incorrect: Complement activation is part of innate immunity, not a dendritic cell function.",
      "Incorrect: Antibodies are produced by B cells.",
      "Correct: Dendritic cells are professional antigen-presenting cells that initiate adaptive immunity.",
      "Incorrect: Histamine is released by mast cells and basophils."
    ],
    "slideLink": "Histopathology - Inflammation.pdf (Slide: Dendritic cell functions)"
  },
  {
    "question": "Which enzyme is inhibited by NSAIDs to reduce inflammation?",
    "options": [
      "A) Cyclooxygenase",
      "B) Phospholipase A2",
      "C) Lipoxygenase",
      "D) Protein kinase A",
      "E) DNA polymerase"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: NSAIDs inhibit COX enzymes, blocking prostaglandin synthesis.",
      "Incorrect: This enzyme is inhibited by steroids, not NSAIDs.",
      "Incorrect: Lipoxygenase is not the target of NSAIDs.",
      "Incorrect: PKA is involved in intracellular signalling, not inflammation.",
      "Incorrect: DNA polymerase is not involved in the inflammatory pathway."
    ],
    "slideLink": "Histopathology - Inflammation.pdf (Slide: NSAIDs and COX inhibition)"
  },
  {
    "question": "Which region of the brain integrates thermal information and coordinates thermoregulatory responses?",
    "options": [
      "A) Medulla oblongata",
      "B) Cerebellum",
      "C) Anterior hypothalamus",
      "D) Hippocampus",
      "E) Pineal gland"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: The medulla regulates vital functions like respiration and BP.",
      "Incorrect: The cerebellum controls coordination, not thermoregulation.",
      "Correct: The anterior hypothalamus contains the preoptic area responsible for detecting increased body temperature and initiating cooling responses.",
      "Incorrect: The hippocampus is involved in memory.",
      "Incorrect: The pineal gland regulates melatonin, not temperature."
    ],
    "slideLink": "Thermoregulation and the Autonomic Nervous System.pdf (Slide: Hypothalamic regulation)"
  },
  {
    "question": "Which substance is primarily responsible for vasodilation during acute inflammation?",
    "options": [
      "A) Interleukin-1",
      "B) Tumour necrosis factor-alpha",
      "C) Histamine",
      "D) Bradykinin",
      "E) C-reactive protein"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: IL-1 is a cytokine but does not cause immediate vasodilation.",
      "Incorrect: TNF-α promotes inflammation but does not act directly on blood vessels.",
      "Correct: Histamine, released by mast cells, causes arteriolar vasodilation and increased vascular permeability.",
      "Incorrect: Bradykinin also contributes, but histamine is the faster-acting primary mediator.",
      "Incorrect: CRP is a marker of inflammation, not a mediator."
    ],
    "slideLink": "Histopathology - Inflammation.pdf (Slide: Vascular changes)"
  },
  {
    "question": "Which receptor type is activated by norepinephrine to increase heart rate?",
    "options": [
      "A) β1-adrenergic receptor",
      "B) β2-adrenergic receptor",
      "C) α1-adrenergic receptor",
      "D) Muscarinic M2 receptor",
      "E) Nicotinic receptor"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: β1 receptors in the heart increase chronotropy and inotropy.",
      "Incorrect: β2 receptors mediate vasodilation and bronchodilation.",
      "Incorrect: α1 receptors cause vasoconstriction.",
      "Incorrect: M2 receptors decrease heart rate via parasympathetic input.",
      "Incorrect: Nicotinic receptors are found at autonomic ganglia and neuromuscular junctions."
    ],
    "slideLink": "Thermoregulation and the Autonomic Nervous System.pdf (Slide: Autonomic heart control)"
  },
  {
    "question": "What does a positive feedback loop result in?",
    "options": [
      "A) Return to homeostasis",
      "B) Amplification of a stimulus",
      "C) Inhibition of hormone release",
      "D) Decreased sensitivity to change",
      "E) Baseline equilibrium"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: That’s a negative feedback loop.",
      "Correct: Positive feedback enhances the initial stimulus, such as during childbirth or clotting.",
      "Incorrect: Hormone release inhibition is a characteristic of negative feedback.",
      "Incorrect: Positive feedback increases response, not decreases it.",
      "Incorrect: Positive feedback disturbs baseline homeostasis."
    ],
    "slideLink": "Homeostasis and Control Systems.pdf (Slide: Feedback loops)"
  },
  {
    "question": "Which connective tissue structure attaches muscle to bone?",
    "options": [
      "A) Ligament",
      "B) Cartilage",
      "C) Tendon",
      "D) Fascia",
      "E) Bursa"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Ligaments connect bone to bone.",
      "Incorrect: Cartilage is found at joint surfaces.",
      "Correct: Tendons attach skeletal muscle to bone.",
      "Incorrect: Fascia surrounds muscles but doesn't attach them to bone.",
      "Incorrect: Bursae reduce friction between structures."
    ],
    "slideLink": "Practical 05b Overview of Joints.pdf (Slide: Tendon structure)"
  },
  {
    "question": "Which immune mediator is primarily responsible for fever?",
    "options": [
      "A) IL-4",
      "B) IL-10",
      "C) TNF-alpha",
      "D) IL-1",
      "E) IFN-gamma"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: IL-4 promotes Th2 differentiation.",
      "Incorrect: IL-10 is anti-inflammatory.",
      "Incorrect: TNF-alpha contributes but IL-1 is the primary endogenous pyrogen.",
      "Correct: IL-1 acts on the hypothalamus to raise the thermoregulatory set point.",
      "Incorrect: IFN-gamma activates macrophages, not involved in thermoregulation."
    ],
    "slideLink": "Histopathology - Inflammation.pdf (Slide: Pyrogens)"
  },
  {
    "question": "Which sensory receptor type in skeletal muscle is most directly responsible for detecting changes in muscle length?",
    "options": [
      "A) Golgi tendon organ",
      "B) Pacinian corpuscle",
      "C) Muscle spindle",
      "D) Ruffini endings",
      "E) Free nerve endings"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Golgi tendon organs detect tension, not length.",
      "Incorrect: Pacinian corpuscles detect vibration and pressure.",
      "Correct: Muscle spindles detect stretch (length) within skeletal muscle.",
      "Incorrect: Ruffini endings detect sustained pressure and skin stretch.",
      "Incorrect: Free nerve endings detect pain and temperature."
    ],
    "slideLink": "Divisions of the Nervous System.pdf (Slide: Muscle spindle function)"
  },
  {
    "question": "Which thermoregulatory mechanism is activated first during moderate heat stress?",
    "options": [
      "A) Piloerection",
      "B) Peripheral vasoconstriction",
      "C) Non-shivering thermogenesis",
      "D) Cutaneous vasodilation",
      "E) Shivering"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Piloerection is a cold response to trap heat.",
      "Incorrect: Vasoconstriction conserves heat in cold environments.",
      "Incorrect: Non-shivering thermogenesis is more relevant in cold, especially in infants.",
      "Correct: Vasodilation increases blood flow to the skin for heat dissipation.",
      "Incorrect: Shivering generates heat during cold exposure, not heat stress."
    ],
    "slideLink": "Thermoregulation and the Autonomic Nervous System Med1028 upload.pdf (Slide: Heat dissipation)"
  },
  {
    "question": "What is the immediate result of histamine binding to H1 receptors on post-capillary venules during inflammation?",
    "options": [
      "A) Increased vascular permeability",
      "B) Vasoconstriction",
      "C) Neutrophil activation",
      "D) Thrombosis",
      "E) Smooth muscle relaxation"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: H1 receptor activation causes endothelial cell contraction, increasing permeability.",
      "Incorrect: Histamine causes vasodilation, not constriction.",
      "Incorrect: Histamine does not directly activate neutrophils.",
      "Incorrect: Histamine does not initiate clot formation.",
      "Incorrect: Histamine causes bronchial smooth muscle contraction, not relaxation."
    ],
    "slideLink": "Histopathology - Inflammation.pdf (Slide: Histamine function)"
  },
  {
    "question": "Which zone of articular cartilage is responsible for resisting compressive forces in synovial joints?",
    "options": [
      "A) Superficial zone",
      "B) Transitional zone",
      "C) Radial zone",
      "D) Calcified zone",
      "E) Subchondral bone"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: The superficial zone reduces friction but does not resist compression.",
      "Incorrect: The transitional zone allows shear deformation but is not primary for compression.",
      "Correct: The radial (deep) zone has vertically aligned collagen fibers to resist compression.",
      "Incorrect: The calcified zone anchors cartilage to bone but does not absorb forces.",
      "Incorrect: Subchondral bone supports cartilage but does not perform the compression resistance directly."
    ],
    "slideLink": "Practical 05b Overview of Joints.pdf (Slide: Articular cartilage zones)"
  },
  {
    "question": "Which enzyme initiates the breakdown of hydrogen peroxide in neutrophils, producing microbicidal activity?",
    "options": [
      "A) Superoxide dismutase",
      "B) Glutathione peroxidase",
      "C) Catalase",
      "D) Myeloperoxidase",
      "E) NADPH oxidase"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: SOD converts superoxide to hydrogen peroxide, not its breakdown.",
      "Incorrect: Glutathione peroxidase detoxifies H2O2 but not in phagolysosomes.",
      "Incorrect: Catalase breaks down H2O2 to water and oxygen, reducing toxicity.",
      "Correct: Myeloperoxidase converts H2O2 into hypochlorous acid, a potent antimicrobial.",
      "Incorrect: NADPH oxidase generates superoxide, upstream of H2O2."
    ],
    "slideLink": "Histopathology - Inflammation.pdf (Slide: Neutrophil oxidative burst)"
  },
  {
    "question": "Which glial cell type provides myelination for CNS neurons?",
    "options": [
      "A) Schwann cells",
      "B) Oligodendrocytes",
      "C) Astrocytes",
      "D) Microglia",
      "E) Ependymal cells"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Schwann cells myelinate axons in the peripheral nervous system.",
      "Correct: Oligodendrocytes myelinate multiple CNS axons.",
      "Incorrect: Astrocytes maintain the blood-brain barrier, not myelination.",
      "Incorrect: Microglia are the resident macrophages of the CNS.",
      "Incorrect: Ependymal cells line ventricles and produce CSF."
    ],
    "slideLink": "Divisions of the Nervous System.pdf (Slide: Glial cells)"
  },
  {
    "question": "Which inflammatory mediator is responsible for fever induction via the hypothalamus?",
    "options": [
      "A) IL-4",
      "B) TNF-α",
      "C) IL-1β",
      "D) IL-10",
      "E) Histamine"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: IL-4 promotes B cell class switching but does not induce fever.",
      "Incorrect: TNF-α contributes to systemic inflammation but is less potent for fever.",
      "Correct: IL-1β acts on the hypothalamus to elevate body temperature.",
      "Incorrect: IL-10 is anti-inflammatory.",
      "Incorrect: Histamine is involved in vascular changes, not central fever."
    ],
    "slideLink": "Histopathology - Inflammation.pdf (Slide: Pyrogens and fever)"
  },
  {
    "question": "In a patient with Guillain-Barré syndrome, which part of the nervous system is primarily affected?",
    "options": [
      "A) CNS grey matter",
      "B) Corticospinal tracts",
      "C) Peripheral nerve myelin",
      "D) Spinal interneurons",
      "E) Blood-brain barrier"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: GBS does not affect CNS grey matter.",
      "Incorrect: Upper motor neuron tracts are unaffected in GBS.",
      "Correct: GBS involves autoimmune demyelination of peripheral nerves.",
      "Incorrect: Interneurons are not the target in GBS.",
      "Incorrect: BBB is intact; this is a PNS condition."
    ],
    "slideLink": "Divisions of the Nervous System.pdf (Slide: Peripheral neuropathies)"
  },
  {
    "question": "Which synovial joint subtype allows movement in only one plane (uniaxial)?",
    "options": [
      "A) Ball and socket",
      "B) Saddle",
      "C) Hinge",
      "D) Condyloid",
      "E) Plane"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Ball and socket joints are multiaxial.",
      "Incorrect: Saddle joints allow biaxial movement.",
      "Correct: Hinge joints (e.g. elbow) allow flexion and extension in one plane.",
      "Incorrect: Condyloid joints permit biaxial motion.",
      "Incorrect: Plane joints allow gliding, often multiaxial."
    ],
    "slideLink": "Practical 05b Overview of Joints.pdf (Slide: Synovial joint types)"
  },
  {
    "question": "What neurotransmitter is used by preganglionic autonomic neurons in both sympathetic and parasympathetic divisions?",
    "options": [
      "A) Acetylcholine",
      "B) Dopamine",
      "C) Norepinephrine",
      "D) GABA",
      "E) Glutamate"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: Acetylcholine is released by all preganglionic autonomic neurons.",
      "Incorrect: Dopamine is used in the CNS and some sympathetic ganglia but not standard preganglionic fibers.",
      "Incorrect: NE is used by postganglionic sympathetic fibers.",
      "Incorrect: GABA is inhibitory in the CNS.",
      "Incorrect: Glutamate is excitatory in the CNS, not autonomic pathways."
    ],
    "slideLink": "Divisions of the Nervous System.pdf (Slide: Autonomic neurotransmitters)"
  },
  {
    "question": "Which of the following best describes the function of ependymal cells in the CNS?",
    "options": [
      "A) Myelination of axons",
      "B) Maintenance of the blood-brain barrier",
      "C) Phagocytosis of cellular debris",
      "D) Lining of brain ventricles and cerebrospinal fluid production",
      "E) Signal transduction in sensory neurons"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Oligodendrocytes handle CNS myelination.",
      "Incorrect: Astrocytes contribute to the blood-brain barrier.",
      "Incorrect: Microglia are responsible for phagocytosis in the CNS.",
      "Correct: Ependymal cells line the ventricles and are involved in CSF production.",
      "Incorrect: Signal transduction is a function of neurons, not glial cells."
    ],
    "slideLink": "Divisions of the Nervous System.pdf (Slide: Ependymal cells)"
  },
  {
    "question": "Which connective tissue layer directly surrounds individual nerve fibers?",
    "options": [
      "A) Epineurium",
      "B) Endoneurium",
      "C) Perineurium",
      "D) Myelin sheath",
      "E) Schwann layer"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Epineurium surrounds the entire nerve.",
      "Correct: Endoneurium wraps around individual axons.",
      "Incorrect: Perineurium surrounds bundles (fascicles) of axons.",
      "Incorrect: Myelin sheath is produced by Schwann cells but is not connective tissue.",
      "Incorrect: 'Schwann layer' is not an anatomical term."
    ],
    "slideLink": "Nerve.pdf (Slide: Nerve structure)"
  },
  {
    "question": "Which of the following best explains the primary action of bradykinin in inflammation?",
    "options": [
      "A) Promotes leukocyte chemotaxis",
      "B) Increases vascular permeability and causes pain",
      "C) Enhances platelet aggregation",
      "D) Induces neutrophil apoptosis",
      "E) Inhibits prostaglandin synthesis"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Chemotaxis is primarily mediated by C5a and IL-8.",
      "Correct: Bradykinin causes vasodilation, increased permeability, and pain.",
      "Incorrect: Thromboxane A2 is involved in platelet aggregation.",
      "Incorrect: Neutrophils undergo apoptosis naturally after inflammation.",
      "Incorrect: NSAIDs inhibit prostaglandins, not bradykinin."
    ],
    "slideLink": "Histopathology - Inflammation.pdf (Slide: Inflammatory mediators)"
  },
  {
    "question": "Which of the following directly triggers the classical complement pathway?",
    "options": [
      "A) Mannose residues on microbial surfaces",
      "B) C-reactive protein binding",
      "C) Antigen-antibody complexes",
      "D) Bacterial lipopolysaccharide",
      "E) Factor B binding"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: This activates the lectin pathway.",
      "Incorrect: CRP binding can activate complement but not via the classical pathway.",
      "Correct: Classical pathway is initiated by antibody (IgG or IgM) binding to antigen.",
      "Incorrect: LPS activates the alternative pathway.",
      "Incorrect: Factor B is part of the alternative pathway."
    ],
    "slideLink": "Histopathology - Inflammation.pdf (Slide: Complement pathways)"
  },
  {
    "question": "Which structure is responsible for proprioceptive feedback from muscles to the CNS?",
    "options": [
      "A) Golgi tendon organs",
      "B) Muscle spindles",
      "C) Free nerve endings",
      "D) Pacinian corpuscles",
      "E) Merkel discs"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Golgi tendon organs detect tension at tendons.",
      "Correct: Muscle spindles detect muscle stretch and relay proprioceptive info.",
      "Incorrect: Free nerve endings detect pain and temperature.",
      "Incorrect: Pacinian corpuscles detect vibration and pressure.",
      "Incorrect: Merkel discs detect fine touch, not proprioception."
    ],
    "slideLink": "Divisions of the Nervous System.pdf (Slide: Proprioceptors)"
  },
  {
    "question": "In skeletal muscle contraction, what causes the release of calcium from the sarcoplasmic reticulum?",
    "options": [
      "A) Opening of sodium channels",
      "B) Action potential along the sarcolemma",
      "C) Influx of chloride ions",
      "D) Breakdown of ATP",
      "E) Activation of myosin ATPase"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Sodium channels trigger the action potential but don’t release calcium directly.",
      "Correct: The AP propagates down T-tubules, activating SR calcium release via DHP and ryanodine receptors.",
      "Incorrect: Chloride ions are not involved in excitation-contraction coupling.",
      "Incorrect: ATP breakdown powers contraction but doesn't cause calcium release.",
      "Incorrect: Myosin ATPase is downstream of calcium binding."
    ],
    "slideLink": "Homeostasis and Control Systems (Slide: Muscle contraction process)"
  },
  {
    "question": "Which of the following describes the role of the zona adherens in epithelial tissue?",
    "options": [
      "A) Seals cells together to prevent leakage",
      "B) Anchors actin filaments to the cell membrane",
      "C) Forms gap junctions between cells",
      "D) Links intermediate filaments between cells",
      "E) Binds collagen to the basal lamina"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: That describes tight junctions (zonula occludens).",
      "Correct: Zona adherens connects actin cytoskeletons of adjacent cells.",
      "Incorrect: Gap junctions allow cytoplasmic communication.",
      "Incorrect: Desmosomes link intermediate filaments.",
      "Incorrect: Hemidesmosomes link to collagen but not via zona adherens."
    ],
    "slideLink": "Histopathology - Inflammation.pdf (Slide: Cell junction types)"
  },
  {
    "question": "Which cytokine is primarily responsible for stimulating hepatocytes to produce acute phase proteins?",
    "options": [
      "A) IL-2",
      "B) IL-4",
      "C) IL-6",
      "D) IFN-γ",
      "E) IL-12"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: IL-2 promotes T-cell proliferation.",
      "Incorrect: IL-4 drives B-cell class switching to IgE.",
      "Correct: IL-6 stimulates liver to produce CRP, fibrinogen, and other acute-phase proteins.",
      "Incorrect: IFN-γ activates macrophages, not acute phase response.",
      "Incorrect: IL-12 promotes Th1 differentiation but not acute-phase response."
    ],
    "slideLink": "Histopathology - Inflammation.pdf (Slide: Acute phase response)"
  },
  {
    "question": "Which of the following mechanisms does the body use to prevent hypothermia?",
    "options": [
      "A) Vasodilation of skin vessels",
      "B) Increased sweating",
      "C) Vasoconstriction and shivering",
      "D) Bradycardia",
      "E) Eccrine gland activation"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Vasodilation promotes heat loss.",
      "Incorrect: Sweating cools the body via evaporation.",
      "Correct: Vasoconstriction limits heat loss; shivering generates heat.",
      "Incorrect: Heart rate may be affected but not the primary response.",
      "Incorrect: Eccrine glands are for sweat secretion, not heat retention."
    ],
    "slideLink": "Thermoregulation and the Autonomic Nervous System Med1028 upload.pdf (Slide: Cold response)"
  },
  {
    "question": "Which cellular adaptation is seen in the bronchial epithelium of chronic smokers?",
    "options": [
      "A) Atrophy",
      "B) Dysplasia",
      "C) Hyperplasia",
      "D) Metaplasia",
      "E) Neoplasia"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Atrophy is a reduction in cell size/number.",
      "Incorrect: Dysplasia is a pre-cancerous abnormality but not the first adaptation.",
      "Incorrect: Hyperplasia is increased cell number, not change in type.",
      "Correct: Squamous metaplasia replaces columnar epithelium in smokers.",
      "Incorrect: Neoplasia is uncontrolled growth, not an adaptive response."
    ],
    "slideLink": "Histopathology - Inflammation.pdf (Slide: Cellular adaptation types)"
  },
  {
    "question": "Which ion channel is responsible for the repolarization phase of the neuronal action potential?",
    "options": [
      "A) Voltage-gated sodium channel",
      "B) Ligand-gated chloride channel",
      "C) Voltage-gated potassium channel",
      "D) Calcium-activated chloride channel",
      "E) T-type calcium channel"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Sodium channels are involved in depolarization, not repolarization.",
      "Incorrect: Chloride channels typically mediate inhibitory potentials, not repolarization.",
      "Correct: Potassium channels open to restore membrane potential after depolarization.",
      "Incorrect: These are not the primary channels used during action potential repolarization.",
      "Incorrect: T-type calcium channels are transient and do not contribute to repolarization."
    ],
    "slideLink": "Nerve.pdf (Slide: Action potential propagation)"
  },
  {
    "question": "Which type of necrosis is typically associated with enzymatic fat destruction in acute pancreatitis?",
    "options": [
      "A) Caseous necrosis",
      "B) Fibrinoid necrosis",
      "C) Liquefactive necrosis",
      "D) Fat necrosis",
      "E) Coagulative necrosis"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Caseous necrosis is characteristic of tuberculosis infections.",
      "Incorrect: Fibrinoid necrosis occurs in immune complex–mediated vascular damage.",
      "Incorrect: Liquefactive necrosis is typically seen in brain infarcts.",
      "Correct: Fat necrosis occurs due to lipase release in acute pancreatitis.",
      "Incorrect: Coagulative necrosis is common in ischemic injury."
    ],
    "slideLink": "Histopathology - Inflammation.pdf (Slide: Patterns of necrosis)"
  },
  {
    "question": "What is the role of desmosomes in epithelial tissue?",
    "options": [
      "A) Link actin filaments to the cell membrane",
      "B) Seal adjacent cells to prevent leakage",
      "C) Permit passage of ions between cells",
      "D) Anchor intermediate filaments between adjacent cells",
      "E) Attach cells to the basement membrane"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: This function is characteristic of adherens junctions.",
      "Incorrect: Tight junctions serve to prevent paracellular leakage.",
      "Incorrect: Gap junctions allow electrical and chemical communication.",
      "Correct: Desmosomes bind intermediate filaments for structural integrity.",
      "Incorrect: Hemidesmosomes attach cells to the basal lamina."
    ],
    "slideLink": "Histopathology - Inflammation.pdf (Slide: Junctional complexes)"
  },
  {
    "question": "Which neurotransmitter is released by postganglionic sympathetic neurons to sweat glands?",
    "options": [
      "A) Norepinephrine",
      "B) Dopamine",
      "C) Acetylcholine",
      "D) Serotonin",
      "E) Epinephrine"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Norepinephrine is released to most sympathetic effectors but not sweat glands.",
      "Incorrect: Dopamine is not used in peripheral sympathetic targets.",
      "Correct: Postganglionic sympathetic fibers to sweat glands release acetylcholine.",
      "Incorrect: Serotonin is mainly CNS and GI; not used here.",
      "Incorrect: Epinephrine is released by adrenal medulla, not sympathetic neurons."
    ],
    "slideLink": "Thermoregulation and the Autonomic Nervous System.pdf (Slide: Sweat gland innervation)"
  },
  {
    "question": "Which type of receptor detects stretch in skeletal muscle?",
    "options": [
      "A) Meissner corpuscle",
      "B) Golgi tendon organ",
      "C) Muscle spindle",
      "D) Ruffini ending",
      "E) Pacinian corpuscle"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Meissner corpuscles detect light touch in the skin.",
      "Incorrect: Golgi tendon organs detect tension, not stretch.",
      "Correct: Muscle spindles respond to stretch and provide proprioceptive feedback.",
      "Incorrect: Ruffini endings detect skin stretch, not muscle stretch.",
      "Incorrect: Pacinian corpuscles detect vibration and pressure."
    ],
    "slideLink": "Nerve.pdf (Slide: Muscle spindle anatomy)"
  },
  {
    "question": "Which of the following is a characteristic feature of coagulative necrosis?",
    "options": [
      "A) Preservation of tissue architecture",
      "B) Complete enzymatic digestion of cells",
      "C) Cheese-like gross appearance",
      "D) Liquefaction of cellular debris",
      "E) Presence of foamy macrophages"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: Coagulative necrosis preserves basic outline of tissue due to protein denaturation.",
      "Incorrect: That describes liquefactive necrosis.",
      "Incorrect: This appearance is specific to caseous necrosis.",
      "Incorrect: Liquefactive necrosis leads to this outcome.",
      "Incorrect: Foamy macrophages are seen in fat necrosis."
    ],
    "slideLink": "Histopathology - Inflammation.pdf (Slide: Coagulative necrosis)"
  },
  {
    "question": "Which blood vessel type has the greatest capacity to regulate systemic vascular resistance?",
    "options": [
      "A) Capillaries",
      "B) Venules",
      "C) Arterioles",
      "D) Veins",
      "E) Elastic arteries"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Capillaries are sites of exchange, not resistance control.",
      "Incorrect: Venules play a role in return, not resistance.",
      "Correct: Arterioles are primary resistance vessels controlling blood pressure.",
      "Incorrect: Veins are capacitance vessels.",
      "Incorrect: Elastic arteries buffer pressure, not regulate resistance."
    ],
    "slideLink": "Homeostasis and Control Systems.pdf (Slide: Vascular control)"
  },
  {
    "question": "What is the primary function of myelin in the nervous system?",
    "options": [
      "A) Increase neurotransmitter synthesis",
      "B) Reduce neuronal excitability",
      "C) Facilitate saltatory conduction",
      "D) Prevent ion exchange across axons",
      "E) Enhance dendritic arborization"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Myelin does not affect neurotransmitter synthesis.",
      "Incorrect: It doesn't reduce excitability but increases conduction speed.",
      "Correct: Myelin allows rapid conduction via jumping of impulses at nodes.",
      "Incorrect: Ion exchange is not completely blocked, only reduced.",
      "Incorrect: Myelin is around axons, not dendrites."
    ],
    "slideLink": "Divisions of the Nervous System.pdf (Slide: Myelination function)"
  },
  {
    "question": "What change occurs in the axonal membrane at the Node of Ranvier during action potential propagation?",
    "options": [
      "A) Continuous conduction",
      "B) Inactivation of potassium channels",
      "C) Passive diffusion of ions",
      "D) Concentrated sodium influx",
      "E) Local synthesis of neurotransmitters"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Saltatory, not continuous conduction occurs.",
      "Incorrect: Potassium channels activate, not inactivate here.",
      "Incorrect: Passive diffusion is too slow for AP transmission.",
      "Correct: Sodium channels cluster here to allow AP jump.",
      "Incorrect: NT synthesis occurs in cell body."
    ],
    "slideLink": "Nerve.pdf (Slide: Saltatory conduction)"
  },
  {
    "question": "Which type of inflammatory cell is most predominant in acute inflammation?",
    "options": [
      "A) Macrophages",
      "B) Lymphocytes",
      "C) Neutrophils",
      "D) Plasma cells",
      "E) Eosinophils"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Macrophages are predominant in chronic inflammation.",
      "Incorrect: Lymphocytes are key in adaptive immunity and chronic inflammation.",
      "Correct: Neutrophils are the first responders in acute inflammation.",
      "Incorrect: Plasma cells produce antibodies in chronic inflammation.",
      "Incorrect: Eosinophils dominate in parasitic and allergic responses."
    ],
    "slideLink": "Histopathology - Inflammation.pdf (Slide: Acute vs chronic inflammation)"
  },
  {
    "question": "What histological feature characterizes caseous necrosis?",
    "options": [
      "A) Ghost-like outlines of cells",
      "B) Liquefied cellular debris",
      "C) Homogeneous eosinophilic cytoplasm",
      "D) Amorphous granular debris with surrounding granulomas",
      "E) Fat globules and saponification"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: That’s more typical of coagulative necrosis.",
      "Incorrect: Describes liquefactive necrosis.",
      "Incorrect: Eosinophilia appears in many necrotic processes.",
      "Correct: Caseous necrosis shows granular debris and granulomas, seen in TB.",
      "Incorrect: This is characteristic of fat necrosis."
    ],
    "slideLink": "Histopathology - Inflammation.pdf (Slide: Necrosis types)"
  },
  {
    "question": "Which cranial nerve carries parasympathetic fibers to the thoracic and abdominal viscera?",
    "options": [
      "A) Trigeminal nerve (V)",
      "B) Facial nerve (VII)",
      "C) Glossopharyngeal nerve (IX)",
      "D) Vagus nerve (X)",
      "E) Accessory nerve (XI)"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Trigeminal is sensory to face.",
      "Incorrect: Facial provides parasympathetic to salivary glands only.",
      "Incorrect: Glossopharyngeal innervates parotid gland.",
      "Correct: Vagus nerve supplies parasympathetic innervation to thorax and abdomen.",
      "Incorrect: Accessory is motor to sternocleidomastoid and trapezius."
    ],
    "slideLink": "Divisions of the Nervous System.pdf (Slide: Autonomic nervous system)"
  },
  {
    "question": "Which interleukin is primarily involved in stimulating fever via the hypothalamus?",
    "options": [
      "A) IL-1",
      "B) IL-4",
      "C) IL-5",
      "D) IL-8",
      "E) IL-10"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: IL-1 acts on the hypothalamus to induce fever.",
      "Incorrect: IL-4 is involved in B-cell isotype switching.",
      "Incorrect: IL-5 activates eosinophils.",
      "Incorrect: IL-8 recruits neutrophils.",
      "Incorrect: IL-10 is anti-inflammatory."
    ],
    "slideLink": "Histopathology - Inflammation.pdf (Slide: Cytokine functions)"
  },
  {
    "question": "What is the main effect of acetylcholine on heart rate via M2 receptors?",
    "options": [
      "A) Increase heart rate by opening sodium channels",
      "B) Decrease heart rate by increasing potassium efflux",
      "C) Increase contractility via cAMP",
      "D) Vasodilate coronary arteries",
      "E) Trigger baroreceptor reflex"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Sodium influx increases HR, not ACh effect.",
      "Correct: M2 receptors open potassium channels and reduce SA node depolarization.",
      "Incorrect: ACh via M2 decreases contractility.",
      "Incorrect: ACh does not vasodilate coronary vessels directly.",
      "Incorrect: Baroreceptors respond to pressure, not neurotransmitter directly."
    ],
    "slideLink": "Homeostasis and Control Systems.pdf (Slide: Parasympathetic control)"
  },
  {
    "question": "What is the function of the zona occludens in epithelial tissue?",
    "options": [
      "A) Form gap junctions for ion exchange",
      "B) Anchor intermediate filaments",
      "C) Prevent paracellular transport",
      "D) Facilitate endocytosis",
      "E) Support basal lamina"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Gap junctions allow ion exchange, not occludens.",
      "Incorrect: Desmosomes anchor filaments.",
      "Correct: Tight junctions (zonula occludens) seal cells together to prevent leakage.",
      "Incorrect: Endocytosis is unrelated to tight junctions.",
      "Incorrect: The basal lamina is supported by hemidesmosomes."
    ],
    "slideLink": "Histopathology - Inflammation.pdf (Slide: Junction types)"
  },
  {
    "question": "Which structure of the skin is responsible for thermoregulatory sweating?",
    "options": [
      "A) Apocrine glands",
      "B) Sebaceous glands",
      "C) Eccrine glands",
      "D) Hair follicles",
      "E) Merkel cells"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Apocrine glands are for scent, not thermoregulation.",
      "Incorrect: Sebaceous glands secrete sebum, not sweat.",
      "Correct: Eccrine glands secrete sweat for temperature control.",
      "Incorrect: Hair follicles aid in insulation but do not produce sweat.",
      "Incorrect: Merkel cells are involved in touch sensation."
    ],
    "slideLink": "Thermoregulation and the Autonomic Nervous System.pdf (Slide: Sweat gland types)"
  },
  {
    "question": "Which molecule triggers vasodilation in response to increased tissue metabolism?",
    "options": [
      "A) Endothelin",
      "B) Angiotensin II",
      "C) Nitric oxide",
      "D) Norepinephrine",
      "E) Thromboxane A2"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Endothelin is a vasoconstrictor.",
      "Incorrect: Angiotensin II also causes vasoconstriction.",
      "Correct: Nitric oxide is released from endothelium and promotes vasodilation.",
      "Incorrect: Norepinephrine typically causes vasoconstriction.",
      "Incorrect: Thromboxane A2 promotes platelet aggregation and vasoconstriction."
    ],
    "slideLink": "Homeostasis and Control Systems.pdf (Slide: Local metabolic regulation)"
  },
  {
    "question": "Which cell junction is disrupted in pemphigus vulgaris?",
    "options": [
      "A) Tight junction",
      "B) Gap junction",
      "C) Hemidesmosome",
      "D) Desmosome",
      "E) Adherens junction"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Tight junctions are not targeted in pemphigus.",
      "Incorrect: Gap junctions are not involved in structural integrity.",
      "Incorrect: Hemidesmosomes are affected in bullous pemphigoid.",
      "Correct: Desmosomes are targeted by autoantibodies in pemphigus vulgaris.",
      "Incorrect: Adherens junctions are not the primary defect."
    ],
    "slideLink": "Histopathology - Inflammation.pdf (Slide: Blistering disorders)"
  },
  {
    "question": "Which protein is the major component of the intermediate filaments in epithelial cells?",
    "options": [
      "A) Tubulin",
      "B) Actin",
      "C) Keratin",
      "D) Vimentin",
      "E) Myosin"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Tubulin forms microtubules.",
      "Incorrect: Actin is a component of microfilaments.",
      "Correct: Keratin is the main intermediate filament protein in epithelial cells.",
      "Incorrect: Vimentin is found in mesenchymal cells.",
      "Incorrect: Myosin is a motor protein, not structural."
    ],
    "slideLink": "Lecture 12 – Cytoskeleton (Slide: Intermediate filaments)"
  },
  {
    "question": "Which receptor type is associated with Gq protein signaling?",
    "options": [
      "A) Alpha-2 adrenergic receptor",
      "B) Beta-2 adrenergic receptor",
      "C) M3 muscarinic receptor",
      "D) D2 dopamine receptor",
      "E) Nicotinic acetylcholine receptor"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Alpha-2 couples to Gi.",
      "Incorrect: Beta-2 couples to Gs.",
      "Correct: M3 receptors activate Gq, leading to IP3/DAG pathway.",
      "Incorrect: D2 receptors couple to Gi.",
      "Incorrect: Nicotinic receptors are ion channels, not GPCRs."
    ],
    "slideLink": "Homeostasis and Control Systems.pdf (Slide: G-protein signaling)"
  },
  {
    "question": "Which ion is most responsible for triggering vesicle fusion during synaptic transmission?",
    "options": [
      "A) Sodium",
      "B) Potassium",
      "C) Calcium",
      "D) Chloride",
      "E) Magnesium"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Sodium is involved in depolarization, not vesicle fusion.",
      "Incorrect: Potassium repolarizes the membrane.",
      "Correct: Calcium influx triggers synaptic vesicle fusion with the presynaptic membrane.",
      "Incorrect: Chloride mediates inhibitory postsynaptic potentials.",
      "Incorrect: Magnesium blocks NMDA receptors, not vesicle fusion."
    ],
    "slideLink": "Nerve.pdf (Slide: Synaptic vesicle release)"
  },
  {
    "question": "Which term describes a fever that occurs without pyrogens and is due to heat accumulation?",
    "options": [
      "A) Pyrexia",
      "B) Hyperthermia",
      "C) Hypothermia",
      "D) Febrile response",
      "E) Thermopnea"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Pyrexia refers to fever due to cytokine action.",
      "Correct: Hyperthermia is unregulated heat rise, not driven by cytokines.",
      "Incorrect: Hypothermia is a decrease in body temperature.",
      "Incorrect: Febrile response implies pyrogen-induced temperature increase.",
      "Incorrect: Thermopnea refers to breathing influenced by temperature, not fever."
    ],
    "slideLink": "Thermoregulation and the Autonomic Nervous System.pdf (Slide: Fever vs Hyperthermia)"
  },
  {
    "question": "What is the effect of noradrenaline on alpha-1 adrenergic receptors in peripheral vasculature?",
    "options": [
      "A) Vasodilation",
      "B) Increased capillary permeability",
      "C) Vasoconstriction",
      "D) Decreased vascular tone",
      "E) Endothelial relaxation"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Alpha-1 receptors cause vasoconstriction.",
      "Incorrect: Capillary permeability is mediated by histamine.",
      "Correct: Alpha-1 activation causes smooth muscle contraction and vasoconstriction.",
      "Incorrect: Alpha-1 increases, not decreases tone.",
      "Incorrect: This is characteristic of NO, not alpha-1 stimulation."
    ],
    "slideLink": "Homeostasis and Control Systems.pdf (Slide: Sympathetic vascular control)"
  },
  {
    "question": "Which of the following most accurately describes a primary lymphoid organ?",
    "options": [
      "A) Lymph node",
      "B) Spleen",
      "C) Thymus",
      "D) Tonsil",
      "E) Peyer's patch"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Lymph nodes are secondary lymphoid organs.",
      "Incorrect: Spleen filters blood but is not a site for lymphocyte development.",
      "Correct: The thymus is where T cells mature — a primary lymphoid organ.",
      "Incorrect: Tonsils are secondary lymphoid tissue.",
      "Incorrect: Peyer’s patches are part of gut-associated lymphoid tissue."
    ],
    "slideLink": "Histopathology - Inflammation.pdf (Slide: Lymphoid tissue types)"
  },
  {
    "question": "Which metabolic condition promotes shivering thermogenesis?",
    "options": [
      "A) Hyperglycemia",
      "B) Hypothermia",
      "C) Hypernatremia",
      "D) Fever",
      "E) Hypercapnia"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Glucose levels don’t directly initiate shivering.",
      "Correct: Hypothermia stimulates hypothalamic centers that trigger shivering.",
      "Incorrect: Sodium levels don't affect thermoregulation this way.",
      "Incorrect: Fever suppresses shivering.",
      "Incorrect: Hypercapnia influences respiration, not thermogenesis."
    ],
    "slideLink": "Thermoregulation and the Autonomic Nervous System.pdf (Slide: Shivering response)"
  },
  {
    "question": "Which glial cell is responsible for myelination in the central nervous system?",
    "options": [
      "A) Schwann cell",
      "B) Microglia",
      "C) Astrocyte",
      "D) Oligodendrocyte",
      "E) Ependymal cell"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Schwann cells myelinate in the PNS.",
      "Incorrect: Microglia are phagocytes.",
      "Incorrect: Astrocytes support neurons, not myelinate.",
      "Correct: Oligodendrocytes form myelin around CNS axons.",
      "Incorrect: Ependymal cells line ventricles but don’t myelinate."
    ],
    "slideLink": "Divisions of the Nervous System.pdf (Slide: Glial cell functions)"
  },
  {
    "question": "Which of the following joints is a symphysis?",
    "options": [
      "A) Elbow joint",
      "B) Shoulder joint",
      "C) Pubic symphysis",
      "D) Temporomandibular joint",
      "E) Knee joint"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Elbow is a hinge-type synovial joint.",
      "Incorrect: Shoulder is a ball-and-socket synovial joint.",
      "Correct: Pubic symphysis is a secondary cartilaginous joint.",
      "Incorrect: TMJ is synovial.",
      "Incorrect: Knee is a hinge-type synovial joint."
    ],
    "slideLink": "Practical 05b Overview of Joints.pdf (Slide: Joint classification)"
  },
  {
    "question": "Which component of the cytoskeleton is responsible for intracellular transport?",
    "options": [
      "A) Microfilaments",
      "B) Intermediate filaments",
      "C) Microtubules",
      "D) Actin cortex",
      "E) Myosin complexes"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Microfilaments are for cell shape and movement.",
      "Incorrect: Intermediate filaments provide mechanical strength.",
      "Correct: Microtubules are tracks for motor proteins transporting organelles.",
      "Incorrect: The actin cortex is for membrane support.",
      "Incorrect: Myosin is a motor, not a filament track."
    ],
    "slideLink": "Lecture 12 – Cytoskeleton (Slide: Microtubule function)"
  }
  
  
]



let currentQuestionIndex = 0;
let incorrectAnswers = [];
let correctCount = 0;
let totalAnswered = 0;
let inReviewMode = false;
let lastPracticeIndex = 0;
let activeQuestions = [...questions]; // mutable copy
let practiceQuestions = []; // backup of active practice set

const STORAGE_KEY = 'focsProgress';
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const feedbackBox = document.getElementById("feedback-box");
const progressBar = document.getElementById("progress-bar");
const select = document.getElementById("question-select");
const reviewControls = document.getElementById("review-controls");

// Score box
const scoreContainer = document.createElement("div");
scoreContainer.className = "score-box-container";
const scoreFill = document.createElement("div");
scoreFill.className = "score-box-fill";
const scoreLabel = document.createElement("div");
scoreLabel.className = "score-box-label";
scoreFill.appendChild(scoreLabel);
scoreContainer.appendChild(scoreFill);
document.querySelector(".question-box").appendChild(scoreContainer);

function shuffleQuestions(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function renderQuestion() {
   const currentList = inReviewMode ? activeQuestions : activeQuestions;
 
 if (currentUser) {
     const progress = getProgress();
     const answered = Object.keys(progress).length;
     const correct = Object.values(progress).filter(v => v === 'correct').length;
     document.getElementById("user-stats").style.display = "block";
     document.getElementById("stats-summary").innerText = `You've answered ${answered} questions — ${correct} correct.`;
   }
 
   if (currentList.length === 0) {
     questionText.innerText = "No questions available to show.";
     optionsContainer.innerHTML = "";
     feedbackBox.style.display = "none";
     return;
   }
 
   if (!currentList[currentQuestionIndex]) {
     console.warn("Invalid question index:", currentQuestionIndex);
     return;
   }
 
   const q = currentList[currentQuestionIndex];
   questionText.innerText = `Q${currentQuestionIndex + 1}: ${q.question}`;
   optionsContainer.innerHTML = "";
   feedbackBox.style.display = "none";
   feedbackBox.innerHTML = "";
 
   const optionData = q.options.map((text, index) => ({ text, index }));
   shuffleQuestions(optionData);
 
   q.shuffledOptions = optionData;
   q.shuffledCorrectIndex = optionData.findIndex(opt => opt.index === q.correctIndex);
 
   optionData.forEach((optionObj, index) => {
     const btn = document.createElement("button");
     btn.innerText = optionObj.text;
     btn.disabled = false;
     btn.style.opacity = "1.0";
     btn.onclick = () => checkAnswer(index);
     optionsContainer.appendChild(btn);
   });
 
   updateProgress();
   updateDropdown();
   updateScore();
 }
 
 function checkAnswer(selectedIndex) {
   const q = activeQuestions[currentQuestionIndex];
   const isCorrect = selectedIndex === q.shuffledCorrectIndex;
 
   if (!q.hasBeenAnswered) {
     totalAnswered++;
     if (isCorrect) correctCount++;
     q.hasBeenAnswered = true;
   }
 
   if (!isCorrect && !incorrectAnswers.some(item => item.question === q.question)) {
     incorrectAnswers.push({ ...q, selectedIndex });
   }
 
   feedbackBox.style.display = "block";
   feedbackBox.className = `feedback ${isCorrect ? "correct" : "incorrect"}`;
   feedbackBox.innerHTML = `<strong>${isCorrect ? "Correct!" : "Incorrect."}</strong><br><br>`;
   feedbackBox.innerHTML += `<div class="explanations">` +
   q.explanations.map((exp, idx) => {
     const isCorrect = exp.startsWith("Correct:");
     const label = isCorrect ? `<strong>Correct:</strong>` : `<strong>Incorrect:</strong>`;
     const explanationText = exp.replace(/^Correct:|^Incorrect:/, "").trim();
     return `
       <div style="margin-bottom: 12px;">
         <strong>${q.options[idx]}</strong><br>
         ${label} ${explanationText}
       </div>
     `;
   }).join("") +
   `</div>`;
   feedbackBox.innerHTML += `<p><em>Source: ${q.slideLink}</em></p>`;
 
   updateScore();
   saveQuestionStatus(q.originalIndex ?? currentQuestionIndex, isCorrect);
 
   if (currentQuestionIndex === activeQuestions.length - 1) {
     reviewControls.style.display = incorrectAnswers.length ? "flex" : "none";
   }
 }
 
 function nextQuestion() {
   if (currentQuestionIndex < activeQuestions.length - 1) {
     currentQuestionIndex++;
     renderQuestion();
   if (!inReviewMode) lastPracticeIndex = currentQuestionIndex;
   }
 }
 
 function prevQuestion() {
   if (currentQuestionIndex > 0) {
     currentQuestionIndex--;
     renderQuestion();
   if (!inReviewMode) lastPracticeIndex = currentQuestionIndex;
   }
 }
 
 function goToQuestion(index) {
   currentQuestionIndex = parseInt(index);
   renderQuestion();
 }
 
 function updateDropdown() {
   select.innerHTML = "";
   activeQuestions.forEach((q, idx) => {
     const option = document.createElement("option");
     option.value = idx;
     option.text = `Q${idx + 1}`;
     if (idx === currentQuestionIndex) option.selected = true;
     select.appendChild(option);
   });
 }
 
 function updateProgress() {
   const percent = ((currentQuestionIndex + 1) / activeQuestions.length) * 100;
   progressBar.style.width = `${percent}%`;
 }
 
 function updateScore() {
   if (totalAnswered === 0 || inReviewMode) {
     scoreFill.style.width = "0%";
     scoreLabel.innerText = "";
     return;
   }
 
   const percent = Math.round((correctCount / totalAnswered) * 100);
   scoreFill.style.width = `${percent}%`;
   scoreLabel.innerText = `${correctCount}/${totalAnswered} correct (${percent}%)`;
 
   if (percent >= 80) {
     scoreFill.style.backgroundColor = "#38a169";
   } else if (percent >= 50) {
     scoreFill.style.backgroundColor = "#ed8936";
   } else {
     scoreFill.style.backgroundColor = "#e53e3e";
   }
 }
 
 function startReview(filterType = 'incorrect') {
   const progress = getProgress();
   const filtered = questions
     .map((q, i) => ({ ...q, originalIndex: i }))
     .filter(q => progress[q.originalIndex] === filterType);
 
   if (filtered.length === 0) {
     alert(`No ${filterType} questions to review.`);
     return;
   }
 
   // ✅ Save the current shuffled practice set before reviewing
   practiceQuestions = [...activeQuestions];
   lastPracticeIndex = currentQuestionIndex;
 
   inReviewMode = true;
   activeQuestions = filtered;
   currentQuestionIndex = 0;
   document.getElementById("return-controls").style.display = "flex";
   renderQuestion();
 }
 
 function exitReview() {
   inReviewMode = false;
 
   if (practiceQuestions.length > 0) {
     activeQuestions = [...practiceQuestions]; // ✅ Restore previous shuffled list
   } else {
     const progress = getProgress();
     activeQuestions = questions
       .map((q, i) => ({ ...q, originalIndex: i }))
       .filter(q => !progress[q.originalIndex]);
     shuffleQuestions(activeQuestions); // fallback shuffle
   }
 
   currentQuestionIndex = lastPracticeIndex;
   document.getElementById("return-controls").style.display = "none";
   renderQuestion();
 }
 
 let currentUser = null; // will hold the entered username
 
 // Prompt for a username and log them in locally
function loginUser() {
  const username = document.getElementById("username-input").value.trim();
  if (!username) return;

  currentUser = username;
  const key = `${currentUser}_progress`;
  const existing = localStorage.getItem(key);

  if (existing) {
    alert(`Welcome back, ${username}! Your previous progress will be loaded.`);
  } else {
    alert(`Hello ${username}, let's get started!`);
  }

  document.getElementById("auth-section").style.display = "none";
  document.getElementById("app-container").style.display = "block";
  document.getElementById("auth-status").innerText = `Signed in as ${username}`;
  document.getElementById("logout-btn").style.display = "block";

  const progress = getProgress();
  activeQuestions = questions
    .map((q, i) => ({ ...q, originalIndex: i }))
    .filter(q => !progress[q.originalIndex]);

  shuffleQuestions(activeQuestions);
  switchTab('quiz');
  renderQuestion();
}
 
 function registerUser() {
   // Just re-use loginUser since we’re not storing credentials
   loginUser();
 }
 
 function logoutUser() {
   currentUser = null;
   document.getElementById("auth-section").style.display = "block";
   document.getElementById("app-container").style.display = "none";
   document.getElementById("auth-status").innerText = "";
   document.getElementById("logout-btn").style.display = "none";
 }
 
 // LocalStorage-based progress per username
 function getProgress() {
   if (!currentUser) return {};
   const key = `${currentUser}_progress`;
   return JSON.parse(localStorage.getItem(key)) || {};
 }
 
 function saveQuestionStatus(index, isCorrect) {
   if (!currentUser) return;
   const key = `${currentUser}_progress`;
   const progress = JSON.parse(localStorage.getItem(key)) || {};
   progress[index] = isCorrect ? 'correct' : 'incorrect';
   localStorage.setItem(key, JSON.stringify(progress));
 }
 
 function resetProgress() {
   if (currentUser && confirm("Are you sure you want to reset all your progress?")) {
     localStorage.removeItem(`${currentUser}_progress`);
     location.reload();
   }
 }
 // FOR EDUCATIONAL SUMMARIES
 function switchTab(tab) {
   const quizSection = document.getElementById("quiz-section");
   const eduSection = document.getElementById("educational-section");
 
   if (tab === "education") {
     quizSection.style.display = "none";
     eduSection.style.display = "block";
   } else {
     quizSection.style.display = "block";
     eduSection.style.display = "none";
   }
 }
 
 
 window.addEventListener("DOMContentLoaded", () => {
   document.querySelectorAll(".summary-toggle").forEach(button => {
     button.addEventListener("click", () => {
       const content = button.nextElementSibling;
       content.style.display = content.style.display === "block" ? "none" : "block";
     });
   });
 
   const progress = getProgress();
   activeQuestions = questions
     .map((q, i) => ({ ...q, originalIndex: i }))
     .filter(q => !progress[q.originalIndex]); // only show unseen
 
   shuffleQuestions(activeQuestions);
   switchTab('quiz')
   renderQuestion();
 });
