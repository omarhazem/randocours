const enigmes = [
    {
      "id": "EN1",
      "name": "Les suites numériques",
      "questions": [
        {
          "name": "convergence d'une suite",
          "question": "la suite $(U_n)_{n \\in \\mathbb{N}}$ définie par $\\forall n \\in \\mathbb{N},\\; U_{n+1} - U_n = n^2 \\quad \\text{et} \\quad \\forall n \\in \\mathbb{N},\\; U_n \\leq 2$",
          "answers": [
            "la suite $(U_n)_{n \\in \\mathbb{N}}$ est convergente",
            "la suite $(U_n)_{n \\in \\mathbb{N}}$ est bornée",
            "la suite $(U_n)_{n \\in \\mathbb{N}}$ est croissante",
            "la suite $(U_n)_{n \\in \\mathbb{N}}$ est divergente car $U_{n+1} - U_n = n^2$ tend vers l'infini",
            "la suite $(U_n)_{n \\in \\mathbb{N}}$ est oscille mais reste bornée",
            "la suite $(U_n)_{n \\in \\mathbb{N}}$ est constante égale à 2",
            "la suite $(U_n)_{n \\in \\mathbb{N}}$ tend vers 2 sans jamais l'atteindre",
            "la suite $(U_n)_{n \\in \\mathbb{N}}$ admet une limite égale à 2",
            "la suite $(U_n)_{n \\in \\mathbb{N}}$ est arithmétique de raison $n^2$",
            "la suite $(U_n)_{n \\in \\mathbb{N}}$ est convergente car elle est majorée par 2"
          ],
          "correctIndex": 0
        },
        {
          "name": "Limites de suites exponentielles",
          "question": "Calculer $L = \\lim_{n \\to +\\infty} \\frac{2^n + 5^n}{3^n + 2^n}$",
          "answers": [
            "$L = +\\infty$",
            "$L = \\frac{5}{3}$",
            "$L = 5$",
            "$L = 2$",
            "$L = \\log_3(5)$",
            "$L = \\lim_{n \\to \\infty} \\left( \\frac{5}{3} \\right)^n = 0$",
            "$L = 1^{+\\infty} = 1$",
            "$L = \\frac{2 + 5}{3 + 2} = \\frac{7}{5}$",
            "$L = \\lim_{n \\to \\infty} \\frac{2^n (1 + (\\frac{5}{3})^n)}{3^n (1 + (\\frac{2}{3})^n)} = \\lim_{n \\to \\infty} \\frac{2^n}{3^n} = 0$",
            "$L = e^{\\lim_{n \\to \\infty} \\ln\\left(\\frac{2^n + 5^n}{3^n + 2^n}\\right)} = e^{\\lim_{n \\to \\infty} \\frac{\\ln(2^n + 5^n)}{1} - \\frac{\\ln(3^n + 2^n)}{1}} = e^{n \\ln(5) - n \\ln(3)} = e^{n \\ln(\\frac{5}{3})} = 1$"
          ],
          "correctIndex": 0
        },
        {
          "name": "Somme d'une suite mixte",
          "question": "la suite $(U_n)_{n \\in \\mathbb{N}}$ est géométrique de raison $\\frac{1}{4}$ et $U_0 = -2$.<br>Calculer $S = U_0 + 0 + U_1 + 1 + U_2 + 2 + \\dots + U_n + n$",
          "answers": [
            "$S = -\\frac{8}{3} \\left(1 - \\left(\\frac{1}{4}\\right)^n \\right) + \\frac{n(n+1)}{2}$",
            "$S = -\\frac{8}{3} \\left(1 - \\frac{1}{4^n} \\right) + \\frac{n(n+1)}{2}$",
            "$S = -\\frac{8}{3} \\left(1 - \\left(\\frac{1}{2}\\right)^n \\right) + \\frac{n(n+1)}{2}$",
            "$S = -\\frac{8}{3} \\left(\\frac{1}{4}\\right)^n + \\frac{n(n+1)}{2}$",
            "$S = -\\frac{8}{3} \\left(1 - \\left(\\frac{1}{4}\\right)^{n+1} \\right) + \\frac{n(n+1)}{2}$",
            "$S = -\\frac{2}{3} \\left(1 - \\left(\\frac{1}{4}\\right)^n \\right) + \\frac{n(n+1)}{2}$",
            "$S = \\frac{8}{3} \\left(1 - \\left(\\frac{1}{4}\\right)^n \\right) + \\frac{n(n+1)}{2}$",
            "$S = -\\frac{8}{3} \\left(1 - \\left(\\frac{1}{4}\\right)^n \\right) + n^2$",
            "$S = -\\frac{8}{3} \\left(1 - \\left(\\frac{1}{4}\\right)^n \\right) + \\frac{n^2}{2}$",
            "$S = -\\frac{8}{3n} + \\frac{n(n+1)}{2}$"
          ],
          "correctIndex": 0
        },        
        {
          "name": "Suite récurrente et convergence",
          "question": "Soit la suite $(u_n)$ définie par $u_0 = 1$ et pour tout $n \\geq 0$, $u_{n+1} = \\frac{u_n^2+3}{2u_n}$. Quelle est la limite de cette suite ?",
          "answers": [
            "La suite diverge.",
            "La suite est constante et vaut 1.",
            "La suite converge vers $\\sqrt{2}$.",
            "La suite converge vers $\\sqrt{3}$.",
            "La suite oscille entre deux valeurs sans converger.",
            "La suite converge vers 2.",
            "La suite converge vers $\\frac{3}{2}$.",
            "La suite a une limite différente selon la parité de $n$.",
            "La suite converge vers 1.",
            "La suite est strictement décroissante et converge vers 1."
          ],
          "correctIndex": 3
        }
        
      ],
      "final": {
        "name": "Synthèse",
        "question": "Bravo d’être arrivé jusque-là ! vous avez toutes les réponses… mais Saurez-vous les assembler pour débloquer le secret final ? 🔐",
        "code": "0003",
        "locationText": "Direction l’endroit où la nature est toujours au cœur des débats."
      }
    },
    {
      "id": "EN2",
      "name": "Etude de fonction: limites et dérivées",
      "questions": [
        {
          "name": "Dérivée d'une fonction exponentielle",
          "question": "Soit la fonction définie par : $f(x) = \\frac{e^x}{1 + e^{2x}}$. Calculer $f'(x)$.",
          "answers": [
            "$f'(x) = \\frac{(1 - e^{2x}) e^x}{(1 + e^{2x})^2}$",
            "$f'(x) = \\frac{(1 + e^{2x}) e^x}{(1 + e^{2x})^2}$",
            "$f'(x) = \\frac{e^x}{(1 + e^{2x})^2}$",
            "$f'(x) = \\frac{(1 - e^{2x})}{(1 + e^{2x})^2}$",
            "$f'(x) = \\frac{2e^{3x}}{(1 + e^{2x})^2}$",
            "$f'(x) = \\frac{e^x(1 + 2e^{2x})}{(1 + e^{2x})^2}$",
            "$f'(x) = \\frac{e^x(1 - 2e^{2x})}{(1 + e^{2x})^2}$",
            "$f'(x) = \\frac{e^x(1 - e^x)}{(1 + e^{2x})^2}$",
            "$f'(x) = \\frac{e^x}{1 + e^{2x}} - \\frac{e^{3x}}{(1 + e^{2x})^2}$",
            "$f'(x) = \\frac{e^x(1 + e^x)}{(1 + e^{2x})^2}$"
          ],
          "correctIndex": 0
        },
        {
          "name": "Limite logarithmique à l'infini",
          "question": "Calculer $L = \\lim\\limits_{x \\to +\\infty} \\ln\\left( \\frac{x e^x}{1 + e^x} \\right)$",
          "answers": [
            "$+\\infty$",
            "$0$",
            "$1$",
            "$-\\infty$",
            "$\\ln(x)$",
            "$\\ln(e^x)$",
            "$\\ln(1 + e^x)$",
            "$x$",
            "$e^x$",
            "$\\frac{x}{1 + e^x}$"
          ],
          "correctIndex": 0
        },
        {
          "name": "Solutions de l'équation différentielle",
          "question": "Les solutions de l'équation différentielle $4y'' - 4y' + y = 0$ sont les fonctions définies sur $\\mathbb{R}$ par :",
          "answers": [
            "$y(x) = (Ax + B)e^{\\frac{1}{2}x}\\quad A, B \\in \\mathbb{R}$",
            "$y(x) = Ae^{-2x} + Bx\\quad A, B \\in \\mathbb{R}$",
            "$y(x) = Ae^{-x} + Be^{-2x}\\quad A, B \\in \\mathbb{R}$",
            "$y(x) = Ae^{2x} + Bx\\quad A, B \\in \\mathbb{R}$",
            "$y(x) = (Ax + B)e^{2x}\\quad A, B \\in \\mathbb{R}$",
            "$y(x) = Ae^{-\\frac{1}{2}x} + Bx\\quad A, B \\in \\mathbb{R}$",
            "$y(x) = A\\cos(x) + B\\sin(x)\\quad A, B \\in \\mathbb{R}$",
            "$y(x) = Ae^{-x}\\ln(x)\\quad A, B \\in \\mathbb{R}$",
            "$y(x) = Ax + B\\quad A, B \\in \\mathbb{R}$",
            "$y(x) = Ae^{x^2} + Be^{-x^2}\\quad A, B \\in \\mathbb{R}$"
          ],
          "correctIndex": 0
        },     
        {
          "name": "Dérivée et intégrale d'une fonction hyperbolique",
          "question": "Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = \\frac{e^x - e^{-x}}{e^x + e^{-x}}$. Quelle est la valeur de $\\int_{0}^{\\ln(3)} f'(x) \\, dx$ ?",
          "answers": [
            "$\\frac{3}{4}$",
            "$\\frac{4}{5}$",
            "$\\ln(3)$",
            "$\\frac{8}{9}$",
            "$\\frac{2}{3}$",
            "0",
            "$\\frac{9}{10}$",
            "$\\frac{1}{2}$",
            "$\\frac{5}{4}$",
            "$\\frac{8}{3}$"
          ],
          "correctIndex": 1
        }                      
      ],
      "final": {
        "name": "Synthèse",
        "question": "Quelle est la date de création de xxxxx ? Utilise tes réponses pour le savoir.",
        "code": "0001",
        "locationText": "Rendez-vous là où les grandes décisions se prennent"
      }
    },
    {
      "id": "EN3",
      "name": "Etude de fonction: étude graphiques",
      "questions": [
        {
          "name": "Comportement de la fonction en 0⁺",
          "question": "$\\lim\\limits_{x \\to 0^+} \\frac{f(x)-1}{x} = -\\infty$",
          "answers": [
            "$\\mathcal{C}_f$ admet une demi tangente verticale au point $(0,1)$ dirigée vers le bas",
            "$\\mathcal{C}_f$ admet une tangente horizontale en $(0,1)$",
            "$\\mathcal{C}_f$ est discontinue en $x = 0$",
            "$\\mathcal{C}_f$ admet une asymptote verticale en $x = 0$",
            "Il n’y a pas de limite en $x = 0$",
            "$f(0) = -\\infty$",
            "Le point $(0,1)$ est un point d’inflexion",
            "La fonction est dérivable en $x = 0$",
            "$\\mathcal{C}_f$ admet une demi tangente verticale au point $(0,1)$ dirigée vers le haut",
            "Le point $(0,1)$ est un minimum local"
          ],
          "correctIndex": 0
        },
        {
          "name": "Équation ln(x) = x",
          "question": "Soit la fonction $f(x) = \\ln(x) - x$. Combien de solutions réelles admet l’équation $\\ln(x) = x$ ?",
          "answers": [
            "Aucune",
            "Une solution en $x = 1$",
            "Une solution en $x = e$",
            "Deux solutions réelles",
            "Une infinité de solutions",
            "$x = 0$ est solution",
            "$x = 0.5$ est solution",
            "$x = \\frac{1}{e}$ est solution",
            "$x = 2$ est solution",
            "$f$ est croissante donc une seule solution"
          ],
          "correctIndex": 0
        },
        {
          "name": "Aire sous la courbe",
          "question": "Calculer l’aire du domaine délimité par $(C_f)$, les axes du repère et la droite $x = 2$, avec $f(x) = \\frac{x}{x^2 + 1}$ définie sur $\\mathbb{R}$ et dans un repère orthonormé $(\\|\\vec{u}\\| = 1)$.",
          "answers": [
            "$A = \\frac{\\ln 5}{2}\\ \\text{cm}^2$",
            "$A = \\frac{\\ln 3}{2}\\ \\text{cm}^2$",
            "$A = \\frac{\\ln 5}{4}\\ \\text{cm}^2$",
            "$A = \\frac{5}{2}\\ \\text{cm}^2$",
            "$A = \\ln(5)\\ \\text{cm}^2$",
            "$A = \\frac{\\pi}{2}\\ \\text{cm}^2$",
            "$A = \\frac{2}{\\ln 5}\\ \\text{cm}^2$",
            "$A = \\frac{\\ln 2}{2}\\ \\text{cm}^2$",
            "$A = \\frac{1}{\\ln 5}\\ \\text{cm}^2$",
            "$A = \\frac{5}{\\ln 2}\\ \\text{cm}^2$"
          ],
          "correctIndex": 0
        },     
        {
          "name": "Étude d’une équation avec logarithme",
          "question": "Soit $f$ la fonction définie sur $]0,+\\infty[$ par $f(x) = x - \\ln(x)$. Pour $a > 1$, soit $x_a$ l’unique solution de l’équation $f(x) = a$. Quelle affirmation est correcte ?",
          "answers": [
            "$x_a = a$ pour tout $a > 1$",
            "$x_a < a$ pour tout $a > 1$",
            "$x_a > a$ pour tout $a > 1$",
            "$x_a = e^a$ pour tout $a > 1$",
            "$x_a = a - \\ln(a)$ pour tout $a > 1$",
            "$x_a = a + \\ln(a)$ pour tout $a > 1$",
            "$1 < x_a < a$ pour tout $a > 1$",
            "$x_a > a + 1$ pour tout $a > 1$",
            "$x_a = a$ si et seulement si $a = e$",
            "$x_a < 1$ pour tout $a > 1$"
          ],
          "correctIndex": 2
        }                   
      ],
      "final": {
        "name": "Synthèse",
        "question": "Bravo d’être arrivé jusque-là ! vous avez toutes les réponses… mais Saurez-vous les assembler pour débloquer le secret final ? 🔐",
        "code": "0002",
        "locationText": "Vers le coin où l’on recharge les gourdes et les idées."
      }
    },
    {
      "id": "EN4",
      "name": "Les nombres complexes",
      "questions": [
        {
          "name": "Propriétés d’un triangle rectangle et isocèle en A",
          "question": "ABC est un triangle rectangle et isocèle en $A$ (orientation directe). L’une des propriétés suivantes est correcte :",
          "answers": [
            "$|z_B - z_A| = |z_C - z_A| \\text{ et } \\arg\\left(\\frac{z_A - z_B}{z_C - z_B}\\right) \\equiv \\frac{\\pi}{4}\\ [2\\pi]$",
            "$|z_B - z_A| = |z_C - z_A| \\text{ et } \\arg\\left(\\frac{z_A - z_C}{z_B - z_C}\\right) \\equiv \\frac{\\pi}{2}\\ [2\\pi]$",
            "$|z_B - z_C| = |z_C - z_A|$ et $\\arg(z_B - z_A) = \\pi$",
            "$|z_A - z_B| = 1$ et $\\arg(z_C - z_B) = 0$",
            "$|z_B - z_C| = \\sqrt{2} |z_A - z_B|$",
            "$\\arg\\left(\\frac{z_C - z_A}{z_B - z_A}\\right) = \\pi$",
            "$|z_B - z_A|^2 + |z_C - z_A|^2 = |z_B - z_C|^2$",
            "$|z_B - z_A| = |z_B - z_C|$",
            "$\\arg(z_B - z_A) + \\arg(z_C - z_A) = \\frac{\\pi}{2}$",
            "$\\arg(z_B - z_C) = \\pi$"
          ],
          "correctIndex": 0
        },
        {
          "name": "Propriété d’un nombre complexe",
          "question": "Soit $z$ un nombre complexe non nul tel que $\\frac{z + 1}{z} \\in \\mathbb{R}$. L’une des propriétés suivantes est correcte :",
          "answers": [
            "$z$ est réel pur",
            "$z = -1$",
            "$|z| = 1$",
            "$z$ est un imaginaire pur avec $\\Im(z) = 1$",
            "$z = 1$",
            "$z^2 + 1 = 0$",
            "$\\frac{1}{z}$ est un réel positif",
            "$\\text{Arg}(z + 1) = \\pi$",
            "$z \\in \\mathbb{C}$ tel que $|z + 1| = |z|$",
            "$z = \\overline{z}$"
          ],
          "correctIndex": 0
        },
        {
          "name": "Calcul de puissances complexes",
          "question": "Soient $a$ et $b$ deux nombres complexes tels que : $a = e^{i \\frac{\\pi}{12}}$ et $b = e^{i \\frac{5\\pi}{12}}$.<br>Calculer $H = a^{30} + b^{30}$",
          "answers": [
            "$H = 2i$",
            "$H = 2$",
            "$H = -2i$",
            "$H = -2$",
            "$H = 0$",
            "$H = i$",
            "$H = 1 + i$",
            "$H = -1 + i$",
            "$H = \\sqrt{3}$",
            "$H = e^{i \\frac{\\pi}{3}} + e^{i \\frac{5\\pi}{3}}$"
          ],
          "correctIndex": 0
        },
        {
          "name": "Lieu géométrique dans le plan complexe",
          "question": "Dans le plan complexe, on considère les points $A$, $B$ et $C$ d'affixes respectives $a = 2+i$, $b = 3-2i$ et $c = -1+3i$. L'ensemble des points $M$ d'affixe $z$ tels que $|z - a| + |z - b| = |a - b|$ est :",
          "answers": [
            "Le cercle de centre $A$ et de rayon $|a - b|$",
            "Le cercle de centre $B$ et de rayon $|a - b|$",
            "L’ellipse de foyers $A$ et $B$ et de grand axe $|a - b|$",
            "Le segment $[AB]$",
            "La médiatrice du segment $[AB]$",
            "La droite $(AB)$",
            "L’ensemble vide",
            "L’ensemble des points équidistants de $A$ et $B$",
            "Un arc de cercle passant par $A$ et $B$",
            "Le triangle $ABC$"
          ],
          "correctIndex": 2
        }          
      ],
      "final": {
        "name": "Synthèse",
        "question": "Bravo d’être arrivé jusque-là ! vous avez toutes les réponses… mais Saurez-vous les assembler pour débloquer le secret final ? 🔐",
        "code": "0002",
        "locationText": "Direction l’entrée des grandes aventures quotidiennes."
      }
    },
    {
      "id": "EN5",
      "name": "Géométrie dans l'espace",
      "questions": [
        {
          "name": "Distance d’un point à une droite dans l’espace",
          "question": "On considère la droite (D) passant par $A(1, 0, -1)$ et de vecteur directeur $\\vec{u}(2, -1, 1)$.<br>Et soit $P(3, 2, 1)$. Quelle est la distance $d(P, D)$ ?",
          "answers": [
            "$d = \\frac{2}{3}\\sqrt{21}$",
            "$d = \\sqrt{21}$",
            "$d = \\frac{\\sqrt{21}}{3}$",
            "$d = \\frac{\\sqrt{14}}{2}$",
            "$d = \\frac{5}{3}$",
            "$d = \\frac{2}{\\sqrt{21}}$",
            "$d = \\frac{\\sqrt{29}}{3}$",
            "$d = \\sqrt{13}$",
            "$d = \\frac{1}{3}\\sqrt{21}$",
            "$d = 2\\sqrt{21}$"
          ],
          "correctIndex": 0
        },
        {
          "name": "Plan tangent à une sphère – inégalité géométrique",
          "question": "On considère la sphère $(S) : (x - 1)^2 + (y - 1)^2 + (z - 1)^2 = \\frac{4}{3}$. Et le plan $(Q)$ d'équation $x + y + z - 1 = 0$ est tangent à $(S)$ en un point $H$. <br>Soit $M(a, b, c) \\in (Q)$ différent de $H$. Alors $a^2 + b^2 + c^2 \\geq k$.",
          "answers": [
            "$k = \\frac{1}{3}$",
            "$k = \\frac{2}{3}$",
            "$k = 1$",
            "$k = \\frac{4}{3}$",
            "$k = 2$",
            "$k = \\frac{5}{6}$",
            "$k = \\frac{1}{6}$",
            "$k = \\frac{3}{2}$",
            "$k = \\frac{2}{9}$",
            "$k = \\frac{1}{2}$"
          ],
          "correctIndex": 0
        },
        {
          "name": "Vecteurs et produit vectoriel – hauteur dans un triangle",
          "question": "Sachant que $\\vec{AB} \\wedge \\vec{AC} = -6\\vec{i} - 30\\vec{j} + 8\\vec{k}$ et $AC = 5$.<br>Calculer la longueur de la hauteur $BH$ du triangle $ABC$.",
          "answers": [
            "$BH = 2\\sqrt{10}$",
            "$BH = 5\\sqrt{2}$",
            "$BH = \\sqrt{10}$",
            "$BH = 10$",
            "$BH = 6$",
            "$BH = \\sqrt{13}$",
            "$BH = 2\\sqrt{6}$",
            "$BH = \\frac{1}{2}\\sqrt{100}$",
            "$BH = \\sqrt{60}$",
            "$BH = 5$"
          ],
        },
        {
          "name": "Volume d’un tétraèdre dans un cube",
          "question": "Soit $ABCDEFGH$ un cube d’arête 1. On considère les points $I$, $J$ et $K$ milieux respectifs des arêtes $[BC]$, $[CG]$ et $[GF]$. Quel est le volume du tétraèdre $AIJK$ ?",
          "answers": [
            "$\\frac{1}{6}$",
            "$\\frac{1}{8}$",
            "$\\frac{1}{12}$",
            "$\\frac{1}{24}$",
            "$\\frac{1}{3}$",
            "$\\frac{1}{4}$",
            "$\\frac{\\sqrt{3}}{12}$",
            "$\\frac{1}{16}$",
            "$\\frac{1}{2}$",
            "$\\frac{1}{18}$"
          ],
          "correctIndex": 2
        }                       
      ],
      "final": {
        "name":  "Synthèse",
        "question": "Bravo d’être arrivé jusque-là ! vous avez toutes les réponses… mais Saurez-vous les assembler pour débloquer le secret final ? 🔐",
        "code": "0002",
        "locationText": "Là où une phrase change ta façon de voir la journée."
      }
    }
]