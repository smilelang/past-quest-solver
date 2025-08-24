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
  }
];

export const subjects = ['All', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'History', 'Computer Science', 'Economics'];
export const years = [2023, 2022, 2021, 2020, 2019];
export const difficulties = ['All', 'easy', 'medium', 'hard'];