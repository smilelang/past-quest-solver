export interface Question {
  id: string;
  subject: string;
  year: number;
  questionText: string;
  answerText: string;
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
}

export const sampleQuestions: Question[] = [
  {
    id: '1',
    subject: 'Mathematics',
    year: 2023,
    questionText: 'Solve for x in the equation: 2x² + 5x - 3 = 0',
    answerText: 'Using the quadratic formula: x = (-b ± √(b²-4ac)) / 2a\nWhere a=2, b=5, c=-3\n\nx = (-5 ± √(25+24)) / 4\nx = (-5 ± √49) / 4\nx = (-5 ± 7) / 4\n\nTherefore: x = 1/2 or x = -3',
    difficulty: 'medium',
    tags: ['algebra', 'quadratic equations', 'factoring']
  },
  {
    id: '2',
    subject: 'Physics',
    year: 2023,
    questionText: 'A ball is thrown vertically upward with an initial velocity of 20 m/s. Calculate the maximum height reached.',
    answerText: 'Using the kinematic equation: v² = u² + 2as\nAt maximum height, final velocity v = 0\nInitial velocity u = 20 m/s\nAcceleration a = -9.8 m/s² (gravity)\n\n0 = (20)² + 2(-9.8)s\n0 = 400 - 19.6s\ns = 400/19.6 = 20.4 m\n\nMaximum height = 20.4 meters',
    difficulty: 'medium',
    tags: ['kinematics', 'projectile motion', 'gravity']
  },
  {
    id: '3',
    subject: 'Chemistry',
    year: 2022,
    questionText: 'Balance the chemical equation: C₂H₆ + O₂ → CO₂ + H₂O',
    answerText: 'Step-by-step balancing:\n1. Count atoms on both sides\n2. Balance carbon first: C₂H₆ + O₂ → 2CO₂ + H₂O\n3. Balance hydrogen: C₂H₆ + O₂ → 2CO₂ + 3H₂O\n4. Balance oxygen: C₂H₆ + 7/2 O₂ → 2CO₂ + 3H₂O\n5. Remove fractions: 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O\n\nBalanced equation: 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O',
    difficulty: 'easy',
    tags: ['chemical equations', 'balancing', 'combustion']
  },
  {
    id: '4',
    subject: 'Biology',
    year: 2023,
    questionText: 'Explain the process of photosynthesis and write its overall chemical equation.',
    answerText: 'Photosynthesis is the process by which plants convert light energy into chemical energy.\n\nProcess:\n1. Light reactions occur in thylakoids\n2. Calvin cycle occurs in stroma\n3. Chlorophyll absorbs light energy\n4. Water molecules are split (photolysis)\n5. CO₂ is fixed into glucose\n\nOverall equation:\n6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂\n\nThis process is essential for life on Earth as it produces oxygen and glucose.',
    difficulty: 'medium',
    tags: ['photosynthesis', 'cellular processes', 'biochemistry']
  },
  {
    id: '5',
    subject: 'English',
    year: 2022,
    questionText: 'Analyze the use of metaphor in Shakespeare\'s "Romeo and Juliet" with specific examples.',
    answerText: 'Shakespeare extensively uses metaphors in Romeo and Juliet:\n\n1. **Light and Dark Metaphors:**\n   - Juliet as the sun: "It is the east, and Juliet is the sun"\n   - Creates contrast between their love and surrounding darkness\n\n2. **Religious Metaphors:**\n   - Romeo calls Juliet a "saint" and "shrine"\n   - Their love is portrayed as sacred and pure\n\n3. **Death as a Lover:**\n   - "Death that hath sucked the honey of thy breath"\n   - Personifies death as competing for Juliet\n\nThese metaphors elevate their love story and emphasize its tragic nature.',
    difficulty: 'hard',
    tags: ['literature', 'shakespeare', 'metaphor analysis']
  },
  {
    id: '6',
    subject: 'History',
    year: 2023,
    questionText: 'Discuss the main causes of World War I and their interconnections.',
    answerText: 'The main causes of World War I were interconnected:\n\n**1. Militarism:**\n- Arms race between European powers\n- Naval competition, especially Anglo-German\n\n**2. Alliance System:**\n- Triple Alliance: Germany, Austria-Hungary, Italy\n- Triple Entente: France, Russia, Britain\n\n**3. Imperialism:**\n- Competition for colonies\n- Economic rivalries\n\n**4. Nationalism:**\n- Pan-Slavism in Balkans\n- Ethnic tensions in Austria-Hungary\n\n**Trigger:** Assassination of Archduke Franz Ferdinand\n\nThese factors created a powder keg that exploded in 1914.',
    difficulty: 'hard',
    tags: ['world war 1', 'causes', 'european history']
  },
  {
    id: '7',
    subject: 'Mathematics',
    year: 2022,
    questionText: 'Find the derivative of f(x) = 3x³ - 2x² + 5x - 1',
    answerText: 'Using the power rule: d/dx[x^n] = nx^(n-1)\n\nf(x) = 3x³ - 2x² + 5x - 1\n\nf\'(x) = d/dx[3x³] - d/dx[2x²] + d/dx[5x] - d/dx[1]\nf\'(x) = 3(3x²) - 2(2x) + 5(1) - 0\nf\'(x) = 9x² - 4x + 5\n\nTherefore: f\'(x) = 9x² - 4x + 5',
    difficulty: 'medium',
    tags: ['calculus', 'derivatives', 'power rule']
  },
  {
    id: '8',
    subject: 'Physics',
    year: 2022,
    questionText: 'Calculate the electric field strength at a point 0.1 m from a charge of 5 × 10⁻⁶ C.',
    answerText: 'Using Coulomb\'s law: E = kQ/r²\n\nGiven:\n- Q = 5 × 10⁻⁶ C\n- r = 0.1 m\n- k = 9 × 10⁹ N⋅m²/C²\n\nE = (9 × 10⁹)(5 × 10⁻⁶)/(0.1)²\nE = (45 × 10³)/(0.01)\nE = 4.5 × 10⁶ N/C\n\nElectric field strength = 4.5 × 10⁶ N/C',
    difficulty: 'medium',
    tags: ['electrostatics', 'electric field', 'coulombs law']
  },
  {
    id: '9',
    subject: 'Chemistry',
    year: 2023,
    questionText: 'Explain the concept of pH and calculate the pH of a 0.01 M HCl solution.',
    answerText: 'pH is a measure of hydrogen ion concentration in a solution.\n\npH = -log[H⁺]\n\nFor HCl (strong acid):\nHCl → H⁺ + Cl⁻ (complete dissociation)\n\nFor 0.01 M HCl:\n[H⁺] = 0.01 M = 1 × 10⁻² M\n\npH = -log(1 × 10⁻²)\npH = -log(10⁻²)\npH = -(-2)\npH = 2\n\nThe pH of 0.01 M HCl is 2 (acidic).',
    difficulty: 'medium',
    tags: ['acids and bases', 'pH calculations', 'logarithms']
  },
  {
    id: '10',
    subject: 'Biology',
    year: 2022,
    questionText: 'Describe the structure and function of DNA, including the base pairing rules.',
    answerText: 'DNA (Deoxyribonucleic Acid) Structure:\n\n**Structure:**\n- Double helix (twisted ladder)\n- Sugar-phosphate backbone\n- Nitrogenous bases: A, T, G, C\n- Antiparallel strands\n\n**Base Pairing Rules:**\n- Adenine (A) pairs with Thymine (T) - 2 hydrogen bonds\n- Guanine (G) pairs with Cytosine (C) - 3 hydrogen bonds\n\n**Functions:**\n1. Stores genetic information\n2. Controls protein synthesis\n3. Passes hereditary traits to offspring\n4. Regulates cellular activities\n\nThe complementary base pairing ensures accurate replication.',
    difficulty: 'medium',
    tags: ['DNA', 'genetics', 'base pairing', 'molecular biology']
  },
  {
    id: '11',
    subject: 'Computer Science',
    year: 2023,
    questionText: 'Write a Python function to implement binary search algorithm.',
    answerText: 'Binary Search Algorithm in Python:\n\n```python\ndef binary_search(arr, target):\n    left, right = 0, len(arr) - 1\n    \n    while left <= right:\n        mid = (left + right) // 2\n        \n        if arr[mid] == target:\n            return mid  # Found target\n        elif arr[mid] < target:\n            left = mid + 1  # Search right half\n        else:\n            right = mid - 1  # Search left half\n    \n    return -1  # Target not found\n\n# Example usage:\narray = [1, 3, 5, 7, 9, 11, 13]\nresult = binary_search(array, 7)\nprint(f"Element found at index: {result}")  # Output: 3\n```\n\nTime Complexity: O(log n)\nSpace Complexity: O(1)',
    difficulty: 'medium',
    tags: ['algorithms', 'binary search', 'python', 'programming']
  },
  {
    id: '12',
    subject: 'Economics',
    year: 2023,
    questionText: 'Explain the law of supply and demand with a practical example.',
    answerText: 'Law of Supply and Demand:\n\n**Law of Demand:**\n- As price increases, quantity demanded decreases\n- Inverse relationship between price and demand\n\n**Law of Supply:**\n- As price increases, quantity supplied increases\n- Direct relationship between price and supply\n\n**Practical Example - Concert Tickets:**\n\n*High Demand Scenario:*\n- Popular artist announces concert\n- High demand, limited supply\n- Ticket prices increase\n- Some fans priced out (demand decreases)\n\n*Low Demand Scenario:*\n- Less popular artist\n- Lower demand, same supply\n- Ticket prices decrease\n- More people can afford tickets\n\n**Market Equilibrium:** Where supply and demand curves intersect, determining market price.',
    difficulty: 'easy',
    tags: ['microeconomics', 'supply and demand', 'market equilibrium']
  },
  {
    id: '13',
    subject: 'Mathematics',
    year: 2021,
    questionText: 'Solve the system of equations: 2x + 3y = 12 and x - y = 1',
    answerText: 'System of equations:\n2x + 3y = 12  ... (1)\nx - y = 1     ... (2)\n\n**Method: Substitution**\n\nFrom equation (2): x = y + 1\n\nSubstitute into equation (1):\n2(y + 1) + 3y = 12\n2y + 2 + 3y = 12\n5y + 2 = 12\n5y = 10\ny = 2\n\nSubstitute back:\nx = y + 1 = 2 + 1 = 3\n\n**Verification:**\n2(3) + 3(2) = 6 + 6 = 12 ✓\n3 - 2 = 1 ✓\n\nSolution: x = 3, y = 2',
    difficulty: 'easy',
    tags: ['algebra', 'systems of equations', 'substitution method']
  },
  {
    id: '14',
    subject: 'Physics',
    year: 2021,
    questionText: 'A car accelerates from rest to 30 m/s in 10 seconds. Calculate the acceleration and distance traveled.',
    answerText: 'Given:\n- Initial velocity (u) = 0 m/s (from rest)\n- Final velocity (v) = 30 m/s\n- Time (t) = 10 s\n\n**Step 1: Calculate acceleration**\nUsing: v = u + at\n30 = 0 + a(10)\na = 30/10 = 3 m/s²\n\n**Step 2: Calculate distance**\nUsing: s = ut + ½at²\ns = 0(10) + ½(3)(10)²\ns = 0 + ½(3)(100)\ns = 150 m\n\n**Alternative method:**\ns = (u + v)t/2 = (0 + 30)(10)/2 = 150 m\n\n**Results:**\n- Acceleration = 3 m/s²\n- Distance traveled = 150 m',
    difficulty: 'easy',
    tags: ['kinematics', 'acceleration', 'motion equations']
  },
  {
    id: '15',
    subject: 'Chemistry',
    year: 2021,
    questionText: 'Calculate the molar mass of calcium carbonate (CaCO₃) and determine moles in 50g sample.',
    answerText: 'Calcium Carbonate: CaCO₃\n\n**Step 1: Calculate Molar Mass**\nAtomic masses:\n- Ca: 40.08 g/mol\n- C: 12.01 g/mol\n- O: 16.00 g/mol\n\nMolar mass of CaCO₃:\n= 40.08 + 12.01 + 3(16.00)\n= 40.08 + 12.01 + 48.00\n= 100.09 g/mol\n\n**Step 2: Calculate moles in 50g sample**\nUsing: n = mass/molar mass\nn = 50g / 100.09 g/mol\nn = 0.4995 mol ≈ 0.50 mol\n\n**Results:**\n- Molar mass of CaCO₃ = 100.09 g/mol\n- Moles in 50g sample = 0.50 mol',
    difficulty: 'easy',
    tags: ['stoichiometry', 'molar mass', 'mole calculations']
  },
  {
    id: '16',
    subject: 'Biology',
    year: 2021,
    questionText: 'Explain the process of mitosis and its significance in multicellular organisms.',
    answerText: 'Mitosis: Cell division producing two identical diploid cells\n\n**Phases of Mitosis:**\n\n1. **Prophase:**\n   - Chromosomes condense and become visible\n   - Nuclear envelope begins to break down\n   - Centrioles move to opposite poles\n\n2. **Metaphase:**\n   - Chromosomes align at cell equator\n   - Spindle fibers attach to centromeres\n\n3. **Anaphase:**\n   - Sister chromatids separate\n   - Move to opposite poles\n\n4. **Telophase:**\n   - Nuclear envelopes reform\n   - Chromosomes decondense\n   - Cytokinesis begins\n\n**Significance:**\n- Growth and development\n- Tissue repair and regeneration\n- Asexual reproduction\n- Maintains chromosome number\n- Replaces damaged cells',
    difficulty: 'medium',
    tags: ['cell division', 'mitosis', 'cell biology', 'genetics']
  },
  {
    id: '17',
    subject: 'English',
    year: 2023,
    questionText: 'Compare and contrast the themes of revenge in "Hamlet" and "The Count of Monte Cristo".',
    answerText: 'Revenge in "Hamlet" vs "The Count of Monte Cristo":\n\n**Similarities:**\n- Both protagonists seek revenge for wrongs against family\n- Revenge consumes their lives and identity\n- Multiple innocent people suffer as collateral damage\n- Themes of justice vs. vengeance explored\n\n**Differences:**\n\n**Hamlet:**\n- Hesitant, philosophical approach\n- Internal conflict and moral questioning\n- Revenge ultimately destructive to all\n- Ends in tragedy for everyone\n\n**The Count of Monte Cristo:**\n- Methodical, calculated revenge\n- Patient, long-term planning\n- Eventually finds redemption through mercy\n- Possibility of forgiveness and new beginning\n\n**Conclusion:**\nWhile both works explore revenge\'s consuming nature, Hamlet presents it as ultimately destructive, while Dumas offers hope for redemption through mercy and forgiveness.',
    difficulty: 'hard',
    tags: ['comparative literature', 'themes', 'revenge', 'character analysis']
  },
  {
    id: '18',
    subject: 'History',
    year: 2022,
    questionText: 'Analyze the impact of the Industrial Revolution on social class structure in 19th century Britain.',
    answerText: 'Industrial Revolution\'s Impact on British Social Structure:\n\n**Pre-Industrial Classes:**\n- Aristocracy (land-owning nobles)\n- Gentry (small landowners)\n- Peasants/Agricultural workers\n\n**Post-Industrial Changes:**\n\n**1. Emergence of New Classes:**\n- **Industrial Bourgeoisie:** Factory owners, entrepreneurs\n- **Urban Working Class:** Factory workers, miners\n- **Middle Class:** Professionals, managers, clerks\n\n**2. Social Mobility:**\n- Increased opportunities for wealth accumulation\n- Education became more important\n- Merit began competing with birth\n\n**3. Living Conditions:**\n- **Working Class:** Overcrowded cities, poor conditions\n- **Middle Class:** Suburban comfort, domestic ideals\n- **Upper Class:** Maintained privilege, adapted to industry\n\n**4. Political Changes:**\n- Workers\' rights movements\n- Reform Acts extending voting rights\n- Rise of labor unions\n\n**Long-term Impact:** Created modern class system based more on wealth than birth.',
    difficulty: 'hard',
    tags: ['industrial revolution', 'social change', 'british history', 'class structure']
  },
  {
    id: '19',
    subject: 'Computer Science',
    year: 2022,
    questionText: 'Explain the concept of Big O notation and analyze the complexity of bubble sort algorithm.',
    answerText: 'Big O Notation: Describes algorithm efficiency as input size grows\n\n**Big O Concepts:**\n- **O(1):** Constant time\n- **O(log n):** Logarithmic time\n- **O(n):** Linear time\n- **O(n²):** Quadratic time\n- **O(2ⁿ):** Exponential time\n\n**Bubble Sort Algorithm:**\n```python\ndef bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):           # Outer loop: n iterations\n        for j in range(0, n-i-1): # Inner loop: varies\n            if arr[j] > arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]\n```\n\n**Complexity Analysis:**\n- **Worst Case:** O(n²) - Array reverse sorted\n- **Average Case:** O(n²) - Random order\n- **Best Case:** O(n) - Array already sorted (with optimization)\n- **Space Complexity:** O(1) - In-place sorting\n\n**Why O(n²)?**\nNested loops: Outer loop runs n times, inner loop runs (n-1) + (n-2) + ... + 1 = n(n-1)/2 ≈ n²/2 ≈ O(n²)',
    difficulty: 'medium',
    tags: ['algorithms', 'complexity analysis', 'big o notation', 'sorting']
  },
  {
    id: '20',
    subject: 'Economics',
    year: 2022,
    questionText: 'Explain the concept of inflation and its effects on different economic groups.',
    answerText: 'Inflation: General increase in prices over time, reducing purchasing power\n\n**Types of Inflation:**\n1. **Demand-Pull:** Too much money chasing too few goods\n2. **Cost-Push:** Rising production costs\n3. **Built-in:** Expected inflation becomes reality\n\n**Measurement:**\n- Consumer Price Index (CPI)\n- Producer Price Index (PPI)\n- GDP Deflator\n\n**Effects on Different Groups:**\n\n**Winners:**\n- **Debtors:** Pay back with cheaper dollars\n- **Asset owners:** Real estate, stocks may appreciate\n- **Variable income earners:** Wages that adjust with inflation\n\n**Losers:**\n- **Fixed income recipients:** Pensioners, bondholders\n- **Savers:** Cash loses purchasing power\n- **Creditors:** Repaid with cheaper money\n\n**Economic Impacts:**\n- Reduces purchasing power\n- Creates uncertainty in planning\n- Can stimulate short-term growth\n- Erodes savings and investment\n\n**Policy Response:** Central banks use interest rates and monetary policy to control inflation.',
    difficulty: 'medium',
    tags: ['macroeconomics', 'inflation', 'monetary policy', 'economic effects']
  },
  {
    id: '21',
    subject: 'Mathematics',
    year: 2024,
    questionText: 'Find the area under the curve y = x² from x = 0 to x = 3 using integration.',
    answerText: 'Finding area under curve y = x² from x = 0 to x = 3:\n\n**Step 1: Set up the integral**\nArea = ∫₀³ x² dx\n\n**Step 2: Find the antiderivative**\n∫ x² dx = x³/3 + C\n\n**Step 3: Apply limits using Fundamental Theorem of Calculus**\nArea = [x³/3]₀³\nArea = (3³/3) - (0³/3)\nArea = (27/3) - 0\nArea = 9\n\n**Verification by Riemann sums:**\nUsing rectangles, as n→∞:\nΣ(3i/n)² · (3/n) = 27/n³ · Σi² = 27/n³ · n(n+1)(2n+1)/6\nAs n→∞, this approaches 9.\n\n**Answer:** The area under the curve is 9 square units.',
    difficulty: 'medium',
    tags: ['calculus', 'integration', 'definite integrals', 'area under curve']
  },
  {
    id: '22',
    subject: 'Physics',
    year: 2024,
    questionText: 'A pendulum has a length of 1.0 m. Calculate its period and frequency on Earth.',
    answerText: 'Simple Pendulum Calculations:\n\n**Given:**\n- Length (L) = 1.0 m\n- Acceleration due to gravity (g) = 9.8 m/s²\n\n**Formula for period:**\nT = 2π√(L/g)\n\n**Step 1: Calculate period**\nT = 2π√(1.0/9.8)\nT = 2π√(0.102)\nT = 2π × 0.319\nT = 2.01 seconds\n\n**Step 2: Calculate frequency**\nFrequency f = 1/T\nf = 1/2.01\nf = 0.497 Hz ≈ 0.50 Hz\n\n**Physical Interpretation:**\n- The pendulum completes one full swing in ~2 seconds\n- It oscillates at approximately 0.5 cycles per second\n- Period is independent of mass and amplitude (for small angles)\n\n**Results:**\n- Period T = 2.01 s\n- Frequency f = 0.50 Hz',
    difficulty: 'easy',
    tags: ['oscillations', 'simple harmonic motion', 'pendulum', 'periodic motion']
  },
  {
    id: '23',
    subject: 'Chemistry',
    year: 2024,
    questionText: 'Explain the concept of electronegativity and predict the bond type in NaCl and H₂O.',
    answerText: 'Electronegativity: Ability of an atom to attract electrons in a chemical bond\n\n**Electronegativity Scale (Pauling Scale):**\n- Fluorine: 4.0 (highest)\n- Oxygen: 3.5\n- Chlorine: 3.0\n- Nitrogen: 3.0\n- Carbon: 2.5\n- Hydrogen: 2.1\n- Sodium: 0.9\n\n**Bond Type Prediction Rules:**\n- ΔEN > 1.7: Ionic bond\n- 0.4 < ΔEN < 1.7: Polar covalent\n- ΔEN < 0.4: Nonpolar covalent\n\n**Analysis:**\n\n**1. NaCl:**\n- Na: 0.9, Cl: 3.0\n- ΔEN = 3.0 - 0.9 = 2.1\n- Since 2.1 > 1.7 → **Ionic bond**\n- Na⁺ and Cl⁻ ions form crystal lattice\n\n**2. H₂O:**\n- H: 2.1, O: 3.5\n- ΔEN = 3.5 - 2.1 = 1.4\n- Since 0.4 < 1.4 < 1.7 → **Polar covalent bond**\n- Electrons pulled toward oxygen, creating partial charges (δ+ on H, δ- on O)',
    difficulty: 'medium',
    tags: ['electronegativity', 'chemical bonding', 'ionic bonds', 'covalent bonds']
  },
  {
    id: '24',
    subject: 'Biology',
    year: 2024,
    questionText: 'Explain the process of protein synthesis, including transcription and translation.',
    answerText: 'Protein Synthesis: Two-stage process converting DNA information into proteins\n\n**Stage 1: Transcription (DNA → RNA)**\n\n**Location:** Nucleus (eukaryotes)\n**Steps:**\n1. **Initiation:** RNA polymerase binds to promoter\n2. **Elongation:** DNA unwinds, RNA polymerase reads template strand\n3. **Termination:** RNA polymerase reaches terminator sequence\n\n**Product:** mRNA (messenger RNA)\n\n**Stage 2: Translation (RNA → Protein)**\n\n**Location:** Ribosomes (cytoplasm/ER)\n**Steps:**\n1. **Initiation:** mRNA binds to ribosome, first tRNA arrives\n2. **Elongation:** tRNAs bring amino acids, peptide bonds form\n3. **Termination:** Stop codon reached, protein released\n\n**Key Players:**\n- **mRNA:** Carries genetic code\n- **tRNA:** Brings amino acids, has anticodon\n- **rRNA:** Part of ribosome structure\n- **Ribosomes:** Protein synthesis machinery\n\n**Genetic Code:**\n- Triplet codons (3 bases = 1 amino acid)\n- 64 codons, 20 amino acids\n- Start codon: AUG\n- Stop codons: UAA, UAG, UGA\n\n**Result:** Functional protein with specific amino acid sequence',
    difficulty: 'hard',
    tags: ['protein synthesis', 'transcription', 'translation', 'molecular biology', 'genetics']
  },
  {
    id: '25',
    subject: 'English',
    year: 2024,
    questionText: 'Analyze the use of symbolism in George Orwell\'s "1984" with specific examples.',
    answerText: 'Symbolism in George Orwell\'s "1984":\n\n**1. Big Brother**\n- **Symbol:** Omnipresent government surveillance\n- **Meaning:** Loss of privacy, totalitarian control\n- **Quote:** "Big Brother Is Watching You"\n- **Effect:** Creates atmosphere of paranoia and fear\n\n**2. Room 101**\n- **Symbol:** Ultimate fear and psychological breaking point\n- **Meaning:** Complete destruction of individual will\n- **Context:** Winston\'s fear of rats used against him\n- **Significance:** Represents how totalitarian regimes exploit personal fears\n\n**3. The Glass Paperweight**\n- **Symbol:** Beauty, past, and fragile human connections\n- **Meaning:** Winston and Julia\'s relationship\n- **Destruction:** Shatters when arrested, symbolizing broken love\n- **Metaphor:** Fragility of truth and beauty under oppression\n\n**4. Newspeak**\n- **Symbol:** Control of thought through language\n- **Purpose:** Limit expression = limit thought\n- **Examples:** "doublethink," "thoughtcrime"\n- **Warning:** How language manipulation controls minds\n\n**5. The Telescreen**\n- **Symbol:** Two-way surveillance technology\n- **Modern relevance:** Social media, smart devices\n- **Effect:** No private space or thought\n\n**Overall Theme:** These symbols work together to show how totalitarian power destroys individual freedom, truth, and human connection.',
    difficulty: 'hard',
    tags: ['literature analysis', 'symbolism', 'dystopian fiction', '1984', 'orwell']
  },
  {
    id: '26',
    subject: 'History',
    year: 2024,
    questionText: 'Examine the causes and consequences of the French Revolution (1789-1799).',
    answerText: 'The French Revolution (1789-1799): Causes and Consequences\n\n**CAUSES:**\n\n**1. Social Inequality (Ancien Régime):**\n- First Estate: Clergy (1% of population, tax-exempt)\n- Second Estate: Nobility (2% of population, tax-exempt)\n- Third Estate: Everyone else (97%, paid all taxes)\n\n**2. Economic Crisis:**\n- Massive debt from wars (Seven Years\' War, American Revolution)\n- Poor harvests leading to bread shortages\n- Inefficient tax system\n\n**3. Political Weakness:**\n- Louis XVI\'s indecisive leadership\n- Absolute monarchy losing legitimacy\n- Failed attempts at financial reform\n\n**4. Enlightenment Ideas:**\n- Popular sovereignty (Rousseau)\n- Separation of powers (Montesquieu)\n- Natural rights (Locke)\n- Spread through salons and pamphlets\n\n**CONSEQUENCES:**\n\n**1. Political Changes:**\n- End of absolute monarchy\n- Declaration of Rights of Man (1789)\n- Rise of nationalism\n- Eventual rise of Napoleon\n\n**2. Social Transformation:**\n- Abolition of feudalism\n- Legal equality regardless of birth\n- Secular education system\n\n**3. International Impact:**\n- Inspired democratic movements worldwide\n- Napoleonic Wars spread revolutionary ideas\n- Conservative reaction (Congress of Vienna)\n\n**Long-term Legacy:** Established principles of liberty, equality, and fraternity that influenced modern democratic societies.',
    difficulty: 'hard',
    tags: ['french revolution', 'european history', 'political change', 'social transformation']
  },
  {
    id: '27',
    subject: 'Computer Science',
    year: 2024,
    questionText: 'Implement a stack data structure in Python with push, pop, and peek operations.',
    answerText: 'Stack Implementation in Python:\n\n```python\nclass Stack:\n    def __init__(self):\n        \"\"\"Initialize empty stack\"\"\"\n        self.items = []\n    \n    def push(self, item):\n        \"\"\"Add item to top of stack\"\"\"\n        self.items.append(item)\n        print(f"Pushed {item} to stack")\n    \n    def pop(self):\n        \"\"\"Remove and return top item\"\"\"\n        if self.is_empty():\n            return "Stack is empty"\n        item = self.items.pop()\n        print(f"Popped {item} from stack")\n        return item\n    \n    def peek(self):\n        \"\"\"Return top item without removing\"\"\"\n        if self.is_empty():\n            return "Stack is empty"\n        return self.items[-1]\n    \n    def is_empty(self):\n        \"\"\"Check if stack is empty\"\"\"\n        return len(self.items) == 0\n    \n    def size(self):\n        \"\"\"Return number of items in stack\"\"\"\n        return len(self.items)\n    \n    def display(self):\n        \"\"\"Display stack contents\"\"\"\n        if self.is_empty():\n            print("Stack is empty")\n        else:\n            print("Stack contents (top to bottom):", self.items[::-1])\n\n# Example usage:\nstack = Stack()\nstack.push(10)\nstack.push(20)\nstack.push(30)\nstack.display()  # [30, 20, 10]\nprint("Top item:", stack.peek())  # 30\nstack.pop()  # Removes 30\nstack.display()  # [20, 10]\n```\n\n**Time Complexities:**\n- Push: O(1)\n- Pop: O(1)\n- Peek: O(1)\n- Space: O(n)',
    difficulty: 'medium',
    tags: ['data structures', 'stack', 'python', 'programming', 'algorithms']
  },
  {
    id: '28',
    subject: 'Economics',
    year: 2024,
    questionText: 'Explain the concept of GDP and calculate it using the expenditure approach.',
    answerText: 'Gross Domestic Product (GDP): Total value of all goods and services produced within a country\'s borders in one year\n\n**Expenditure Approach Formula:**\nGDP = C + I + G + (X - M)\n\nWhere:\n- **C = Consumption:** Household spending on goods/services\n- **I = Investment:** Business investment in capital goods\n- **G = Government Spending:** Government purchases of goods/services\n- **X = Exports:** Goods/services sold to other countries\n- **M = Imports:** Goods/services bought from other countries\n- **(X - M) = Net Exports**\n\n**Example Calculation:**\nCountry ABC (2024):\n- Consumer spending: $800 billion\n- Business investment: $200 billion\n- Government spending: $300 billion\n- Exports: $150 billion\n- Imports: $100 billion\n\n**Solution:**\nGDP = C + I + G + (X - M)\nGDP = 800 + 200 + 300 + (150 - 100)\nGDP = 800 + 200 + 300 + 50\nGDP = $1,350 billion\n\n**Other GDP Approaches:**\n1. **Income Approach:** Sum of all incomes\n2. **Production Approach:** Sum of value added\n\n**GDP Limitations:**\n- Doesn\'t measure income distribution\n- Excludes non-market activities\n- Ignores environmental costs\n- Doesn\'t reflect quality of life\n\n**Real vs Nominal GDP:**\n- Nominal: Current prices\n- Real: Adjusted for inflation',
    difficulty: 'medium',
    tags: ['macroeconomics', 'GDP', 'national income', 'economic indicators']
  },
  {
    id: '29',
    subject: 'Mathematics',
    year: 2020,
    questionText: 'Prove that the sum of angles in any triangle is 180°.',
    answerText: 'Proof: Sum of angles in a triangle equals 180°\n\n**Method: Using Parallel Lines**\n\n**Given:** Triangle ABC with angles α, β, and γ\n\n**Construction:**\n1. Draw a line through vertex A parallel to side BC\n2. Label this line as line l\n\n**Proof:**\n\n**Step 1:** Since line l is parallel to BC:\n- Angle BAl = angle ABC = β (alternate interior angles)\n- Angle CAl = angle ACB = γ (alternate interior angles)\n\n**Step 2:** At point A, angles on line l form a straight line:\nAngle BAl + angle BAC + angle CAl = 180°\n\n**Step 3:** Substitute from Step 1:\nβ + α + γ = 180°\n\n**Therefore:** The sum of all three angles in triangle ABC is 180°\n\n**Alternative Proof (Exterior Angle):**\n1. Extend side BC to point D\n2. Exterior angle ACD = α + β (exterior angle theorem)\n3. Since ACD + γ = 180° (angles on straight line)\n4. Therefore: (α + β) + γ = 180°\n\n**Conclusion:** This proof works for any triangle - acute, right, or obtuse.\n\n**Q.E.D.** (Quod Erat Demonstrandum - "which was to be demonstrated")',
    difficulty: 'hard',
    tags: ['geometry', 'proof', 'triangles', 'parallel lines', 'angle relationships']
  },
  {
    id: '30',
    subject: 'Physics',
    year: 2020,
    questionText: 'Explain the photoelectric effect and how it supports the particle theory of light.',
    answerText: 'The Photoelectric Effect: Evidence for Light\'s Particle Nature\n\n**Definition:** Emission of electrons from a metal surface when light of sufficient frequency strikes it\n\n**Key Observations:**\n\n**1. Threshold Frequency:**\n- Below certain frequency f₀, no electrons emitted regardless of intensity\n- Above f₀, electrons emitted immediately\n\n**2. Maximum Kinetic Energy:**\n- Depends only on frequency, not intensity\n- KEₘₐₓ increases linearly with frequency\n\n**3. Number of Electrons:**\n- Proportional to light intensity (at f > f₀)\n- Independent of frequency\n\n**Classical Wave Theory Problems:**\n- Predicted energy should depend on intensity only\n- Couldn\'t explain threshold frequency\n- Expected time delay for electron emission\n\n**Einstein\'s Photon Explanation (1905):**\n\n**Key Concept:** Light consists of discrete energy packets (photons)\n\n**Energy of photon:** E = hf\nWhere h = Planck\'s constant (6.626 × 10⁻³⁴ J·s)\n\n**Photoelectric Equation:**\nhf = φ + KEₘₐₓ\n\nWhere:\n- hf = photon energy\n- φ = work function (minimum energy to remove electron)\n- KEₘₐₓ = maximum kinetic energy of emitted electron\n\n**Explanation of Observations:**\n1. **Threshold frequency:** f₀ = φ/h\n2. **Energy independence of intensity:** Each photon has fixed energy hf\n3. **Immediate emission:** One-to-one photon-electron interaction\n\n**Historical Significance:**\n- Won Einstein the 1921 Nobel Prize\n- Established wave-particle duality\n- Foundation of quantum mechanics',
    difficulty: 'hard',
    tags: ['quantum physics', 'photoelectric effect', 'photons', 'wave-particle duality', 'einstein']
  }
];

export const subjects = ['All', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'History', 'Computer Science', 'Economics'];
export const years = [2024, 2023, 2022, 2021, 2020, 2019];
export const difficulties = ['All', 'easy', 'medium', 'hard'];