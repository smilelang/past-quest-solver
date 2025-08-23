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
  }
];

export const subjects = ['All', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'History'];
export const years = [2023, 2022, 2021, 2020, 2019];
export const difficulties = ['All', 'easy', 'medium', 'hard'];