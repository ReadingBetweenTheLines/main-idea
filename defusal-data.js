// defusal-data.js — TKA Lexical Defusal Master Question Bank (60 Items)
const defusalDatabase = [
  {
    word: "foster",
    sentence: "The teacher created fun group projects to <strong class='text-amber-300 underline decoration-amber-500'>foster</strong> friendship and teamwork among the new students.",
    options: [
      { text: "encourage and grow", isTarget: true },
      { text: "adopt a child", isTarget: false },
      { text: "stop or cancel", isTarget: false },
      { text: "grade on an exam", isTarget: false },
      { text: "ignore completely", isTarget: false }
    ],
    rationale: "In this sentence, 'foster' means to encourage teamwork and help it grow."
  },
  {
    word: "check",
    sentence: "The school introduced new rules to <strong class='text-amber-300 underline decoration-amber-500'>check</strong> student phone use during class hours.",
    options: [
      { text: "control and limit", isTarget: true },
      { text: "draw a tick mark", isTarget: false },
      { text: "look at pictures", isTarget: false },
      { text: "allow freely", isTarget: false },
      { text: "buy a new charger", isTarget: false }
    ],
    rationale: "When you 'check' a habit or behavior, it means to hold it back or control it."
  },
  {
    word: "weather",
    sentence: "With the help of their savings, the family was able to <strong class='text-amber-300 underline decoration-amber-500'>weather</strong> the difficult months when the shop closed.",
    options: [
      { text: "survive and get through", isTarget: true },
      { text: "check the rain", isTarget: false },
      { text: "give up easily", isTarget: false },
      { text: "move to a city", isTarget: false },
      { text: "lose everything", isTarget: false }
    ],
    rationale: "As a verb, to 'weather' a hard time means to survive it safely."
  },
  {
    word: "channel",
    sentence: "The coach advised the players to <strong class='text-amber-300 underline decoration-amber-500'>channel</strong> their energy into hard practice instead of arguing.",
    options: [
      { text: "direct and focus", isTarget: true },
      { text: "change the TV", isTarget: false },
      { text: "dig a waterway", isTarget: false },
      { text: "waste on talking", isTarget: false },
      { text: "forget completely", isTarget: false }
    ],
    rationale: "To 'channel' energy means to guide and direct it toward a good goal."
  },
  {
    word: "spearhead",
    sentence: "Three senior students volunteered to <strong class='text-amber-300 underline decoration-amber-500'>spearhead</strong> the clean-up campaign in the school garden.",
    options: [
      { text: "lead and organize", isTarget: true },
      { text: "throw a spear", isTarget: false },
      { text: "watch from behind", isTarget: false },
      { text: "cancel the event", isTarget: false },
      { text: "clean the dishes", isTarget: false }
    ],
    rationale: "To 'spearhead' a project means to be the leader who starts it and drives it forward."
  },
  {
    word: "temper",
    sentence: "His friends told him to <strong class='text-amber-300 underline decoration-amber-500'>temper</strong> his excitement until the exam results were officially announced.",
    options: [
      { text: "calm or tone down", isTarget: true },
      { text: "shout in anger", isTarget: false },
      { text: "celebrate loudly", isTarget: false },
      { text: "cry with fear", isTarget: false },
      { text: "forget the news", isTarget: false }
    ],
    rationale: "To 'temper' feelings means to moderate or cool them down so they are not extreme."
  },
  {
    word: "spark",
    sentence: "The surprise announcement was enough to <strong class='text-amber-300 underline decoration-amber-500'>spark</strong> a heated debate in the classroom.",
    options: [
      { text: "trigger or start", isTarget: true },
      { text: "make electric light", isTarget: false },
      { text: "put out a fire", isTarget: false },
      { text: "end peacefully", isTarget: false },
      { text: "hide the secret", isTarget: false }
    ],
    rationale: "In this context, to 'spark' a debate means to set it off or trigger it."
  },
  {
    word: "forge",
    sentence: "Working together on the science fair helped the two classmates <strong class='text-amber-300 underline decoration-amber-500'>forge</strong> a strong and lasting friendship.",
    options: [
      { text: "build and create", isTarget: true },
      { text: "fake a signature", isTarget: false },
      { text: "break apart", isTarget: false },
      { text: "melt hot metal", isTarget: false },
      { text: "argue constantly", isTarget: false }
    ],
    rationale: "To 'forge' a relationship means to build it through shared effort."
  },
  {
    word: "shield",
    sentence: "Wearing a thick helmet helped <strong class='text-amber-300 underline decoration-amber-500'>shield</strong> the cyclist from head injuries during the fall.",
    options: [
      { text: "protect and guard", isTarget: true },
      { text: "carry on armor", isTarget: false },
      { text: "increase danger", isTarget: false },
      { text: "clean with soap", isTarget: false },
      { text: "paint with colors", isTarget: false }
    ],
    rationale: "As a verb, 'shield' means to protect or keep safe from harm."
  },
  {
    word: "stem",
    sentence: "The nurse applied pressure with a clean bandage to quickly <strong class='text-amber-300 underline decoration-amber-500'>stem</strong> the flow of blood.",
    options: [
      { text: "stop or hold back", isTarget: true },
      { text: "grow a plant part", isTarget: false },
      { text: "speed up the flow", isTarget: false },
      { text: "clean the floor", isTarget: false },
      { text: "test in a lab", isTarget: false }
    ],
    rationale: "To 'stem' a liquid flow means to block or stop it from continuing."
  },
  {
    word: "weigh",
    sentence: "Before deciding which smartphone to buy, Maria took time to <strong class='text-amber-300 underline decoration-amber-500'>weigh</strong> the price against the camera quality.",
    options: [
      { text: "consider and compare", isTarget: true },
      { text: "put on a scale", isTarget: false },
      { text: "ignore the price", isTarget: false },
      { text: "borrow from a friend", isTarget: false },
      { text: "break the screen", isTarget: false }
    ],
    rationale: "To 'weigh' choices means to carefully think about and compare them."
  },
  {
    word: "drain",
    sentence: "Studying all night without any sleep will quickly <strong class='text-amber-300 underline decoration-amber-500'>drain</strong> your energy for the big match tomorrow.",
    options: [
      { text: "empty or use up", isTarget: true },
      { text: "pour down the sink", isTarget: false },
      { text: "fill with water", isTarget: false },
      { text: "make stronger", isTarget: false },
      { text: "clean with a brush", isTarget: false }
    ],
    rationale: "To 'drain' your energy means to exhaust it or use it all up."
  },
  {
    word: "fuel",
    sentence: "Spreading false rumors on social media will only <strong class='text-amber-300 underline decoration-amber-500'>fuel</strong> anger among the students.",
    options: [
      { text: "increase or feed", isTarget: true },
      { text: "fill a car with gas", isTarget: false },
      { text: "calm everyone down", isTarget: false },
      { text: "stop the rumor", isTarget: false },
      { text: "turn off phones", isTarget: false }
    ],
    rationale: "To 'fuel' anger or arguments means to make them grow bigger and stronger."
  },
  {
    word: "anchor",
    sentence: "Having a daily routine helps <strong class='text-amber-300 underline decoration-amber-500'>anchor</strong> your habits when school gets busy.",
    options: [
      { text: "keep steady and stable", isTarget: true },
      { text: "drop into the sea", isTarget: false },
      { text: "change every hour", isTarget: false },
      { text: "float away in air", isTarget: false },
      { text: "read the news", isTarget: false }
    ],
    rationale: "In this figurative sense, to 'anchor' habits means to hold them steady and secure."
  },
  {
    word: "harness",
    sentence: "Engineers designed special wind turbines on the hillside to <strong class='text-amber-300 underline decoration-amber-500'>harness</strong> natural air currents for clean electricity.",
    options: [
      { text: "capture and use", isTarget: true },
      { text: "strap onto a horse", isTarget: false },
      { text: "waste completely", isTarget: false },
      { text: "block from blowing", isTarget: false },
      { text: "paint with colors", isTarget: false }
    ],
    rationale: "To 'harness' a resource like wind or water means to capture and put it to useful work."
  },
  {
    word: "bridge",
    sentence: "Organizing an annual cultural exchange helped the two neighboring schools <strong class='text-amber-300 underline decoration-amber-500'>bridge</strong> their differences.",
    options: [
      { text: "connect and overcome", isTarget: true },
      { text: "walk over a river", isTarget: false },
      { text: "make conflicts worse", isTarget: false },
      { text: "build with concrete", isTarget: false },
      { text: "cancel all talks", isTarget: false }
    ],
    rationale: "To 'bridge' differences means to connect two sides and resolve misunderstandings."
  },
  {
    word: "cushion",
    sentence: "Emergency financial aid was given to small farmers to <strong class='text-amber-300 underline decoration-amber-500'>cushion</strong> the impact of the heavy crop losses.",
    options: [
      { text: "soften or lessen", isTarget: true },
      { text: "sit on a pillow", isTarget: false },
      { text: "make more painful", isTarget: false },
      { text: "sell at a market", isTarget: false },
      { text: "refuse to help", isTarget: false }
    ],
    rationale: "To 'cushion' an impact means to soften the blow or reduce financial pain."
  },
  {
    word: "mirror",
    sentence: "The main character's personal struggles in the story closely <strong class='text-amber-300 underline decoration-amber-500'>mirror</strong> real challenges faced by young people today.",
    options: [
      { text: "reflect or match", isTarget: true },
      { text: "look at in glass", isTarget: false },
      { text: "contradict totally", isTarget: false },
      { text: "break into pieces", isTarget: false },
      { text: "erase from memory", isTarget: false }
    ],
    rationale: "When one event 'mirrors' another, it closely reflects or resembles it."
  },
  {
    word: "root",
    sentence: "The teacher explained that most neighborhood misunderstandings usually <strong class='text-amber-300 underline decoration-amber-500'>root</strong> in poor communication.",
    options: [
      { text: "originate or come from", isTarget: true },
      { text: "grow under soil", isTarget: false },
      { text: "cheer for a team", isTarget: false },
      { text: "disappear completely", isTarget: false },
      { text: "solve peacefully", isTarget: false }
    ],
    rationale: "When a problem 'roots' in something, that means it originates from that underlying cause."
  },
  {
    word: "frame",
    sentence: "Lawyers must be careful how they <strong class='text-amber-300 underline decoration-amber-500'>frame</strong> their arguments so the jury understands the core issue clearly.",
    options: [
      { text: "present and structure", isTarget: true },
      { text: "hang picture glass", isTarget: false },
      { text: "falsely accuse", isTarget: false },
      { text: "forget to mention", isTarget: false },
      { text: "paint with colors", isTarget: false }
    ],
    rationale: "To 'frame' an idea means to construct and present it in a particular way."
  },
  {
    word: "craft",
    sentence: "The student council worked together to carefully <strong class='text-amber-300 underline decoration-amber-500'>craft</strong> a polite letter requesting new library books.",
    options: [
      { text: "write and shape", isTarget: true },
      { text: "make paper origami", isTarget: false },
      { text: "tear up in anger", isTarget: false },
      { text: "send by mistake", isTarget: false },
      { text: "read out loud", isTarget: false }
    ],
    rationale: "To 'craft' a letter or speech means to skillfully write and shape its wording."
  },
  {
    word: "echo",
    sentence: "The student president's concerns about school safety <strong class='text-amber-300 underline decoration-amber-500'>echo</strong> the feelings expressed by many parents.",
    options: [
      { text: "repeat and agree with", isTarget: true },
      { text: "bounce sound in a cave", isTarget: false },
      { text: "disagree strongly", isTarget: false },
      { text: "whisper in secret", isTarget: false },
      { text: "silence completely", isTarget: false }
    ],
    rationale: "When words 'echo' another person's view, they repeat and align with those sentiments."
  },
  {
    word: "shed",
    sentence: "The new scientific experiment helped <strong class='text-amber-300 underline decoration-amber-500'>shed</strong> light on why certain ocean animals migrate at night.",
    options: [
      { text: "reveal or clarify", isTarget: true },
      { text: "store wooden tools", isTarget: false },
      { text: "drop animal fur", isTarget: false },
      { text: "cover in darkness", isTarget: false },
      { text: "cancel the experiment", isTarget: false }
    ],
    rationale: "To 'shed light' on a problem is an idiom that means to clarify or explain it."
  },
  {
    word: "steer",
    sentence: "Good group leaders know how to <strong class='text-amber-300 underline decoration-amber-500'>steer</strong> conversations back to the main topic when people get distracted.",
    options: [
      { text: "guide or direct", isTarget: true },
      { text: "drive a car wheel", isTarget: false },
      { text: "confuse the crowd", isTarget: false },
      { text: "stop speaking", isTarget: false },
      { text: "leave the room", isTarget: false }
    ],
    rationale: "To 'steer' a conversation means to guide or navigate its direction."
  },
  {
    word: "tailor",
    sentence: "Online learning apps can <strong class='text-amber-300 underline decoration-amber-500'>tailor</strong> practice quizzes to match each student's current skill level.",
    options: [
      { text: "adapt and customize", isTarget: true },
      { text: "sew cloth trousers", isTarget: false },
      { text: "make much harder", isTarget: false },
      { text: "delete questions", isTarget: false },
      { text: "grade on paper", isTarget: false }
    ],
    rationale: "To 'tailor' something means to customize and adapt it to fit specific needs."
  },
  {
    word: "trigger",
    sentence: "Eating certain foods with artificial food coloring can sometimes <strong class='text-amber-300 underline decoration-amber-500'>trigger</strong> severe skin rashes in children.",
    options: [
      { text: "cause or set off", isTarget: true },
      { text: "pull on a firearm", isTarget: false },
      { text: "heal completely", isTarget: false },
      { text: "prevent safely", isTarget: false },
      { text: "taste delicious", isTarget: false }
    ],
    rationale: "To 'trigger' a physical reaction means to set it off or cause it."
  },
  {
    word: "unlock",
    sentence: "Learning to read critically will help students <strong class='text-amber-300 underline decoration-amber-500'>unlock</strong> deeper understanding of complex articles.",
    options: [
      { text: "open or access", isTarget: true },
      { text: "open with metal keys", isTarget: false },
      { text: "lock with a padlock", isTarget: false },
      { text: "forget quickly", isTarget: false },
      { text: "close a book", isTarget: false }
    ],
    rationale: "To 'unlock' understanding means to access and make sense of deeper knowledge."
  },
  {
    word: "tap",
    sentence: "The local government plans to <strong class='text-amber-300 underline decoration-amber-500'>tap</strong> into geothermal heat to generate electricity for nearby villages.",
    options: [
      { text: "make use of", isTarget: true },
      { text: "hit a desk gently", isTarget: false },
      { text: "turn on a sink faucet", isTarget: false },
      { text: "waste completely", isTarget: false },
      { text: "block with cement", isTarget: false }
    ],
    rationale: "To 'tap' a natural resource means to draw from it and make use of it."
  },
  {
    word: "curb",
    sentence: "The city planted more trees along sidewalks to <strong class='text-amber-300 underline decoration-amber-500'>curb</strong> rising heat levels in crowded downtown streets.",
    options: [
      { text: "reduce or hold back", isTarget: true },
      { text: "park near the edge", isTarget: false },
      { text: "make much hotter", isTarget: false },
      { text: "ignore the weather", isTarget: false },
      { text: "cut down branches", isTarget: false }
    ],
    rationale: "In this sentence, 'curb' means to limit or reduce heat levels."
  },
  {
    word: "spur",
    sentence: "Offering scholarships for computer science helped <strong class='text-amber-300 underline decoration-amber-500'>spur</strong> higher enrollment in coding programs.",
    options: [
      { text: "encourage and motivate", isTarget: true },
      { text: "kick with a boot metal", isTarget: false },
      { text: "discourage students", isTarget: false },
      { text: "shut down classes", isTarget: false },
      { text: "postpone enrollment", isTarget: false }
    ],
    rationale: "To 'spur' action means to stimulate, encourage, and drive growth."
  },
  {
    word: "cloud",
    sentence: "Feeling angry during an argument will often <strong class='text-amber-300 underline decoration-amber-500'>cloud</strong> your judgment and lead to rash decisions.",
    options: [
      { text: "confuse or blur", isTarget: true },
      { text: "make rain fall", isTarget: false },
      { text: "make thinking clearer", isTarget: false },
      { text: "solve a problem", isTarget: false },
      { text: "fly in an airplane", isTarget: false }
    ],
    rationale: "When emotions 'cloud' your mind, they confuse your judgment."
  },
  {
    word: "plant",
    sentence: "The inspiring documentary was enough to <strong class='text-amber-300 underline decoration-amber-500'>plant</strong> the idea of becoming a marine biologist in her mind.",
    options: [
      { text: "introduce or start", isTarget: true },
      { text: "put seeds into soil", isTarget: false },
      { text: "erase completely", isTarget: false },
      { text: "water flowers", isTarget: false },
      { text: "forget the movie", isTarget: false }
    ],
    rationale: "To 'plant' an idea means to introduce it so it grows over time."
  },
  {
    word: "cradle",
    sentence: "The river valley is often called the <strong class='text-amber-300 underline decoration-amber-500'>cradle</strong> of agriculture because ancient farming first began there.",
    options: [
      { text: "birthplace or origin", isTarget: true },
      { text: "baby rocking bed", isTarget: false },
      { text: "desert wasteland", isTarget: false },
      { text: "deep ocean trench", isTarget: false },
      { text: "mountain summit", isTarget: false }
    ],
    rationale: "Figuratively, a 'cradle' represents the place where something originated or grew."
  },
  {
    word: "gauge",
    sentence: "The science teacher held a short quiz to <strong class='text-amber-300 underline decoration-amber-500'>gauge</strong> how well students understood the ecosystem lesson.",
    options: [
      { text: "measure and evaluate", isTarget: true },
      { text: "read a pressure dial", isTarget: false },
      { text: "confuse intentionally", isTarget: false },
      { text: "cancel the exam", isTarget: false },
      { text: "ignore student marks", isTarget: false }
    ],
    rationale: "To 'gauge' comprehension or knowledge means to assess or measure it."
  },
  {
    word: "cement",
    sentence: "Scoring the winning goal in the finals helped <strong class='text-amber-300 underline decoration-amber-500'>cement</strong> his reputation as a great athlete.",
    options: [
      { text: "solidify and secure", isTarget: true },
      { text: "mix concrete mortar", isTarget: false },
      { text: "ruin completely", isTarget: false },
      { text: "question doubtful", isTarget: false },
      { text: "pave a driveway", isTarget: false }
    ],
    rationale: "To 'cement' a status or reputation means to make it strong, firm, and lasting."
  },
  {
    word: "dampen",
    sentence: "The heavy thunderstorm could not <strong class='text-amber-300 underline decoration-amber-500'>dampen</strong> the enthusiasm of the excited fans waiting outside.",
    options: [
      { text: "reduce or weaken", isTarget: true },
      { text: "make wet with water", isTarget: false },
      { text: "increase energy", isTarget: false },
      { text: "cancel the show", isTarget: false },
      { text: "sell rain umbrellas", isTarget: false }
    ],
    rationale: "To 'dampen' excitement or spirits means to lessen or decrease its strength."
  },
  {
    word: "cultivate",
    sentence: "Reading diverse books every week will help you <strong class='text-amber-300 underline decoration-amber-500'>cultivate</strong> a broader worldview and better vocabulary.",
    options: [
      { text: "develop and improve", isTarget: true },
      { text: "plow a vegetable garden", isTarget: false },
      { text: "forget over time", isTarget: false },
      { text: "restrict strictly", isTarget: false },
      { text: "copy without thinking", isTarget: false }
    ],
    rationale: "To 'cultivate' a skill or mindset means to develop and enrich it through practice."
  },
  {
    word: "swallow",
    sentence: "After realizing his argument was incorrect, he had to <strong class='text-amber-300 underline decoration-amber-500'>swallow</strong> his pride and apologize to the group.",
    options: [
      { text: "accept with humility", isTarget: true },
      { text: "gulp down food", isTarget: false },
      { text: "argue even louder", isTarget: false },
      { text: "drink cold water", isTarget: false },
      { text: "refuse to speak", isTarget: false }
    ],
    rationale: "To 'swallow one's pride' is a common phrase meaning to set pride aside and admit a mistake."
  },
  {
    word: "mask",
    sentence: "Adding sweet chocolate syrup helped <strong class='text-amber-300 underline decoration-amber-500'>mask</strong> the bitter taste of the liquid cough medicine.",
    options: [
      { text: "hide or disguise", isTarget: true },
      { text: "wear on the face", isTarget: false },
      { text: "make more bitter", isTarget: false },
      { text: "spill on the floor", isTarget: false },
      { text: "buy at the pharmacy", isTarget: false }
    ],
    rationale: "To 'mask' an unpleasant taste, odor, or truth means to disguise or cover it up."
  },
  {
    word: "spark",
    sentence: "Reading detective novels as a child helped <strong class='text-amber-300 underline decoration-amber-500'>spark</strong> his lifelong passion for forensic science.",
    options: [
      { text: "ignite and inspire", isTarget: true },
      { text: "strike an iron flint", isTarget: false },
      { text: "extinguish quickly", isTarget: false },
      { text: "warn against danger", isTarget: false },
      { text: "burn paper books", isTarget: false }
    ],
    rationale: "To 'spark' a passion means to ignite and awaken it for the first time."
  },
  {
    word: "shoulder",
    sentence: "As the oldest sibling, he had to <strong class='text-amber-300 underline decoration-amber-500'>shoulder</strong> family chores when his parents worked overtime.",
    options: [
      { text: "carry or take on", isTarget: true },
      { text: "rest on an arm joint", isTarget: false },
      { text: "avoid completely", isTarget: false },
      { text: "push with force", isTarget: false },
      { text: "refuse to help", isTarget: false }
    ],
    rationale: "To 'shoulder' a responsibility means to accept and carry the burden yourself."
  },
  {
    word: "drain",
    sentence: "Worrying about exams all weekend will only <strong class='text-amber-300 underline decoration-amber-500'>drain</strong> your mental peace.",
    options: [
      { text: "deplete and exhaust", isTarget: true },
      { text: "unclog bathroom pipes", isTarget: false },
      { text: "strengthen confidence", isTarget: false },
      { text: "solve school problems", isTarget: false },
      { text: "drink fruit juice", isTarget: false }
    ],
    rationale: "To 'drain' peace or energy means to consume and exhaust it gradually."
  },
  {
    word: "paralyze",
    sentence: "Extreme fear during an earthquake can momentarily <strong class='text-amber-300 underline decoration-amber-500'>paralyze</strong> people, making them freeze instead of finding shelter.",
    options: [
      { text: "immobilize or freeze", isTarget: true },
      { text: "damage leg bones", isTarget: false },
      { text: "run away quickly", isTarget: false },
      { text: "scream for help", isTarget: false },
      { text: "wake from sleep", isTarget: false }
    ],
    rationale: "Figuratively, to 'paralyze' means to stop action or cause someone to freeze in place."
  },
  {
    word: "stifle",
    sentence: "Strict classroom environments with no group discussion can <strong class='text-amber-300 underline decoration-amber-500'>stifle</strong> children's natural curiosity.",
    options: [
      { text: "suppress or choke", isTarget: true },
      { text: "cough in winter", isTarget: false },
      { text: "encourage thinking", isTarget: false },
      { text: "grade with numbers", isTarget: false },
      { text: "reward with medals", isTarget: false }
    ],
    rationale: "To 'stifle' creativity or curiosity means to hold it down, suppress, or choke it."
  },
  {
    word: "cater",
    sentence: "The community library bought audiobooks and large-print novels to <strong class='text-amber-300 underline decoration-amber-500'>cater</strong> to older readers.",
    options: [
      { text: "serve and provide for", isTarget: true },
      { text: "cook party snacks", isTarget: false },
      { text: "charge high fees", isTarget: false },
      { text: "reject requests", isTarget: false },
      { text: "close down early", isTarget: false }
    ],
    rationale: "To 'cater' to a specific group means to provide services that meet their needs."
  },
  {
    word: "fuel",
    sentence: "Encouraging praise from his art teacher helped <strong class='text-amber-300 underline decoration-amber-500'>fuel</strong> his desire to enter national painting competitions.",
    options: [
      { text: "boost and motivate", isTarget: true },
      { text: "fill with gasoline", isTarget: false },
      { text: "discourage totally", isTarget: false },
      { text: "sell canvas boards", isTarget: false },
      { text: "cancel the contest", isTarget: false }
    ],
    rationale: "To 'fuel' a dream or goal means to motivate, power, and push it forward."
  },
  {
    word: "wean",
    sentence: "Parents tried to gradually <strong class='text-amber-300 underline decoration-amber-500'>wean</strong> their kids off video games by encouraging outdoor soccer.",
    options: [
      { text: "detach or separate from", isTarget: true },
      { text: "feed baby milk", isTarget: false },
      { text: "buy newer consoles", isTarget: false },
      { text: "punish with scolding", isTarget: false },
      { text: "play games together", isTarget: false }
    ],
    rationale: "To 'wean' someone off a habit means to gradually help them stop depending on it."
  },
  {
    word: "anchor",
    sentence: "Honesty and respect are core values that <strong class='text-amber-300 underline decoration-amber-500'>anchor</strong> a healthy school community.",
    options: [
      { text: "secure and stabilize", isTarget: true },
      { text: "sink into water", isTarget: false },
      { text: "break apart rules", isTarget: false },
      { text: "float away randomly", isTarget: false },
      { text: "paint on signs", isTarget: false }
    ],
    rationale: "Values that 'anchor' a group provide a firm foundation and keep it stable."
  },
  {
    word: "bloom",
    sentence: "Given patient coaching and time, her public speaking confidence began to <strong class='text-amber-300 underline decoration-amber-500'>bloom</strong>.",
    options: [
      { text: "flourish and thrive", isTarget: true },
      { text: "open flower petals", isTarget: false },
      { text: "wither and fade", isTarget: false },
      { text: "stay nervous", isTarget: false },
      { text: "forget speech lines", isTarget: false }
    ],
    rationale: "When confidence 'blooms', it flourishes, expands, and grows healthy."
  },
  {
    word: "dilute",
    sentence: "Adding too many unrelated subplots will only <strong class='text-amber-300 underline decoration-amber-500'>dilute</strong> the impact of the main story.",
    options: [
      { text: "weaken and water down", isTarget: true },
      { text: "mix with cold water", isTarget: false },
      { text: "make more exciting", isTarget: false },
      { text: "translate to French", isTarget: false },
      { text: "print on paper", isTarget: false }
    ],
    rationale: "To 'dilute' an effect or plot means to weaken its strength and focus."
  },
  {
    word: "harness",
    sentence: "Smart athletes learn to <strong class='text-amber-300 underline decoration-amber-500'>harness</strong> their pre-game nervous energy and turn it into speed.",
    options: [
      { text: "control and utilize", isTarget: true },
      { text: "tie with leather", isTarget: false },
      { text: "waste on shivering", isTarget: false },
      { text: "cancel the match", isTarget: false },
      { text: "ignore completely", isTarget: false }
    ],
    rationale: "To 'harness' nerves or energy means to control them and use them productively."
  },
  {
    word: "blind",
    sentence: "Extreme overconfidence can sometimes <strong class='text-amber-300 underline decoration-amber-500'>blind</strong> a team to their opponent's unexpected strengths.",
    options: [
      { text: "prevent from seeing", isTarget: true },
      { text: "damage eye vision", isTarget: false },
      { text: "help see clearly", isTarget: false },
      { text: "win easily", isTarget: false },
      { text: "celebrate victory", isTarget: false }
    ],
    rationale: "To 'blind' someone in a decision-making context means to make them oblivious to reality."
  },
  {
    word: "shackled",
    sentence: "Without access to reliable internet, rural students felt <strong class='text-amber-300 underline decoration-amber-500'>shackled</strong> in their ability to conduct online research.",
    options: [
      { text: "restricted or hindered", isTarget: true },
      { text: "chained in metal", isTarget: false },
      { text: "free to explore", isTarget: false },
      { text: "praised by teachers", isTarget: false },
      { text: "given laptops", isTarget: false }
    ],
    rationale: "To feel 'shackled' means to be held back or restricted by an obstacle."
  },
  {
    word: "cushion",
    sentence: "Wearing knee pads will help <strong class='text-amber-300 underline decoration-amber-500'>cushion</strong> your knees when you fall while rollerblading.",
    options: [
      { text: "soften the shock of", isTarget: true },
      { text: "sleep on a bed", isTarget: false },
      { text: "cause worse pain", isTarget: false },
      { text: "break plastic wheels", isTarget: false },
      { text: "wash with warm water", isTarget: false }
    ],
    rationale: "To 'cushion' an impact means to absorb the shock and soften the blow."
  },
  {
    word: "channel",
    sentence: "The city built canals to <strong class='text-amber-300 underline decoration-amber-500'>channel</strong> flood water safely away from residential homes.",
    options: [
      { text: "direct the flow of", isTarget: true },
      { text: "watch video shows", isTarget: false },
      { text: "block water totally", isTarget: false },
      { text: "flood the street", isTarget: false },
      { text: "drink from a cup", isTarget: false }
    ],
    rationale: "To 'channel' water means to guide and direct its flow along a path."
  },
  {
    word: "shadow",
    sentence: "The threat of incoming rain continued to <strong class='text-amber-300 underline decoration-amber-500'>shadow</strong> our plans for an outdoor picnic.",
    options: [
      { text: "cast doubt upon", isTarget: true },
      { text: "block sunlight shade", isTarget: false },
      { text: "guarantee nice weather", isTarget: false },
      { text: "pack lunch baskets", isTarget: false },
      { text: "cancel the weekend", isTarget: false }
    ],
    rationale: "When a worry 'shadows' an event, it creates uncertainty and hangs over it."
  },
  {
    word: "nurture",
    sentence: "Regular reading and curiosity will help <strong class='text-amber-300 underline decoration-amber-500'>nurture</strong> a child's imagination.",
    options: [
      { text: "feed and develop", isTarget: true },
      { text: "feed baby formula", isTarget: false },
      { text: "stifle completely", isTarget: false },
      { text: "punish with homework", isTarget: false },
      { text: "close a storybook", isTarget: false }
    ],
    rationale: "To 'nurture' a skill or imagination means to care for and help it grow."
  },
  {
    word: "dwarf",
    sentence: "The massive new cargo ship managed to completely <strong class='text-amber-300 underline decoration-amber-500'>dwarf</strong> all the tiny fishing boats in the harbor.",
    options: [
      { text: "make look small", isTarget: true },
      { text: "fairy tale character", isTarget: false },
      { text: "sink beneath waves", isTarget: false },
      { text: "sail much slower", isTarget: false },
      { text: "paint bright yellow", isTarget: false }
    ],
    rationale: "As a verb, to 'dwarf' something means to make it look tiny by comparison."
  },
  {
    word: "cement",
    sentence: "Sharing funny memories helped <strong class='text-amber-300 underline decoration-amber-500'>cement</strong> their bond as lifelong friends.",
    options: [
      { text: "strengthen and solidify", isTarget: true },
      { text: "pour wet cement", isTarget: false },
      { text: "break apart easily", isTarget: false },
      { text: "forget each other", isTarget: false },
      { text: "argue in public", isTarget: false }
    ],
    rationale: "To 'cement' a bond means to make it firm, solid, and durable."
  },
  {
    word: "spark",
    sentence: "A short power surge was enough to <strong class='text-amber-300 underline decoration-amber-500'>spark</strong> a small fire in the computer lab.",
    options: [
      { text: "ignite and cause", isTarget: true },
      { text: "put out a flame", isTarget: false },
      { text: "unplug safely", isTarget: false },
      { text: "cool down cables", isTarget: false },
      { text: "wipe computer monitors", isTarget: false }
    ],
    rationale: "In this physical context, to 'spark' a fire means to ignite or initiate it."
  },
  {
    word: "bridge",
    sentence: "Using simple diagrams helped the science teacher <strong class='text-amber-300 underline decoration-amber-500'>bridge</strong> the gap between complex theories and daily life.",
    options: [
      { text: "connect and link", isTarget: true },
      { text: "cross over water", isTarget: false },
      { text: "widen the distance", isTarget: false },
      { text: "erase from memory", isTarget: false },
      { text: "demolish completely", isTarget: false }
    ],
    rationale: "To 'bridge' a gap means to connect two sides and make understanding easier."
  },
  {
    word: "cushion",
    sentence: "Wearing thick woolen socks will help <strong class='text-amber-300 underline decoration-amber-500'>cushion</strong> your feet during a long mountain hike.",
    options: [
      { text: "soften pressure on", isTarget: true },
      { text: "sit on a couch", isTarget: false },
      { text: "cause blisters to", isTarget: false },
      { text: "freeze with ice", isTarget: false },
      { text: "wash in a basin", isTarget: false }
    ],
    rationale: "To 'cushion' means to provide soft protection that absorbs pressure and impact."
  },
  {
    word: "anchor",
    sentence: "Family traditions help <strong class='text-amber-300 underline decoration-amber-500'>anchor</strong> children when moving to a totally new city.",
    options: [
      { text: "stabilize and ground", isTarget: true },
      { text: "drop ship chains", isTarget: false },
      { text: "confuse emotions", isTarget: false },
      { text: "pack in moving boxes", isTarget: false },
      { text: "forget old friends", isTarget: false }
    ],
    rationale: "To 'anchor' a person means to keep them emotionally stable and grounded during changes."
  },
  {
    word: "steer",
    sentence: "A patient teacher knows how to <strong class='text-amber-300 underline decoration-amber-500'>steer</strong> young kids away from bad habits without shouting.",
    options: [
      { text: "guide and direct", isTarget: true },
      { text: "turn a truck wheel", isTarget: false },
      { text: "punish harshly", isTarget: false },
      { text: "ignore completely", isTarget: false },
      { text: "drive over curbs", isTarget: false }
    ],
    rationale: "To 'steer' someone means to guide their direction and choices gently."
  },
  {
    word: "shed",
    sentence: "The newly found fossil will <strong class='text-amber-300 underline decoration-amber-500'>shed</strong> light on how early birds learned to glide.",
    options: [
      { text: "clarify or reveal", isTarget: true },
      { text: "drop old feathers", isTarget: false },
      { text: "store yard tools", isTarget: false },
      { text: "hide in shadows", isTarget: false },
      { text: "destroy evidence", isTarget: false }
    ],
    rationale: "The idiom 'shed light' means to clarify or reveal new understanding about something."
  },
  {
    word: "root",
    sentence: "Most arguments between siblings <strong class='text-amber-300 underline decoration-amber-500'>root</strong> in simple jealousy over toys.",
    options: [
      { text: "originate or begin", isTarget: true },
      { text: "grow deep in dirt", isTarget: false },
      { text: "cheer for players", isTarget: false },
      { text: "solve peacefully", isTarget: false },
      { text: "vanish over time", isTarget: false }
    ],
    rationale: "When problems 'root' in something, they stem or originate from that source."
  },
  {
    word: "frame",
    sentence: "Debaters must carefully <strong class='text-amber-300 underline decoration-amber-500'>frame</strong> their opening statements to convince the audience right away.",
    options: [
      { text: "structure and express", isTarget: true },
      { text: "hang picture borders", isTarget: false },
      { text: "falsely accuse", isTarget: false },
      { text: "read from paper", isTarget: false },
      { text: "whisper quietly", isTarget: false }
    ],
    rationale: "To 'frame' thoughts or statements means to shape, structure, and express them clearly."
  },
  {
    word: "craft",
    sentence: "The writer took weeks to <strong class='text-amber-300 underline decoration-amber-500'>craft</strong> the final chapter of the mystery book.",
    options: [
      { text: "compose with care", isTarget: true },
      { text: "cut cardboard paper", isTarget: false },
      { text: "erase by mistake", isTarget: false },
      { text: "rush through quickly", isTarget: false },
      { text: "print on a press", isTarget: false }
    ],
    rationale: "To 'craft' a story or letter means to write and compose it with deliberate care."
  },
  {
    word: "echo",
    sentence: "The coach's words about discipline will always <strong class='text-amber-300 underline decoration-amber-500'>echo</strong> in the athletes' minds during games.",
    options: [
      { text: "resonate and linger", isTarget: true },
      { text: "bounce in a cave", isTarget: false },
      { text: "fade immediately", isTarget: false },
      { text: "disagree totally", isTarget: false },
      { text: "sound like thunder", isTarget: false }
    ],
    rationale: "When words 'echo' in your mind, they resonate, linger, and stay remembered."
  },
  {
    word: "tailor",
    sentence: "Tutors often <strong class='text-amber-300 underline decoration-amber-500'>tailor</strong> their explanations to fit the way each student learns best.",
    options: [
      { text: "adjust and customize", isTarget: true },
      { text: "stitch up shirts", isTarget: false },
      { text: "complicate lessons", isTarget: false },
      { text: "copy from books", isTarget: false },
      { text: "cut with scissors", isTarget: false }
    ],
    rationale: "To 'tailor' an approach means to adjust and customize it for a specific person's needs."
  },
  {
    word: "trigger",
    sentence: "Flicking the rusty light switch can sometimes <strong class='text-amber-300 underline decoration-amber-500'>trigger</strong> a loud electrical buzzing sound.",
    options: [
      { text: "cause or activate", isTarget: true },
      { text: "pull on a rifle", isTarget: false },
      { text: "turn off power", isTarget: false },
      { text: "fix safely", isTarget: false },
      { text: "clean with cloth", isTarget: false }
    ],
    rationale: "To 'trigger' a sound or reaction means to cause it to happen or activate it."
  },
  {
    word: "unlock",
    sentence: "Learning another language can <strong class='text-amber-300 underline decoration-amber-500'>unlock</strong> wonderful travel and career opportunities later in life.",
    options: [
      { text: "open up access to", isTarget: true },
      { text: "turn a brass key", isTarget: false },
      { text: "close down tightly", isTarget: false },
      { text: "restrict completely", isTarget: false },
      { text: "forget over time", isTarget: false }
    ],
    rationale: "To 'unlock' opportunities means to open up access to them."
  },
  {
    word: "tap",
    sentence: "The project gave young coders a chance to <strong class='text-amber-300 underline decoration-amber-500'>tap</strong> their true creative potential.",
    options: [
      { text: "draw upon and use", isTarget: true },
      { text: "hit a desk lightly", isTarget: false },
      { text: "leak water drops", isTarget: false },
      { text: "waste on games", isTarget: false },
      { text: "lock away securely", isTarget: false }
    ],
    rationale: "To 'tap' potential or skills means to access, draw upon, and make use of them."
  },
  {
    word: "spur",
    sentence: "Winning first prize in the school science contest will <strong class='text-amber-300 underline decoration-amber-500'>spur</strong> her to keep building robots.",
    options: [
      { text: "motivate and push", isTarget: true },
      { text: "kick with boots", isTarget: false },
      { text: "stop from trying", isTarget: false },
      { text: "make lose interest", isTarget: false },
      { text: "hide the medal", isTarget: false }
    ],
    rationale: "To 'spur' someone means to motivate, encourage, and push them forward."
  },
  {
    word: "cloud",
    sentence: "Do not let rumors <strong class='text-amber-300 underline decoration-amber-500'>cloud</strong> what you know to be true about your best friend.",
    options: [
      { text: "confuse or obscure", isTarget: true },
      { text: "bring dark rain", isTarget: false },
      { text: "make very clear", isTarget: false },
      { text: "paint white puffs", isTarget: false },
      { text: "prove with facts", isTarget: false }
    ],
    rationale: "When doubts or rumors 'cloud' your view, they obscure the truth and confuse your judgment."
  },
  {
    word: "plant",
    sentence: "The teacher's warm encouragement helped <strong class='text-amber-300 underline decoration-amber-500'>plant</strong> self-confidence in the quiet student.",
    options: [
      { text: "instill and start", isTarget: true },
      { text: "bury flower seeds", isTarget: false },
      { text: "dig up from soil", isTarget: false },
      { text: "destroy with water", isTarget: false },
      { text: "remove completely", isTarget: false }
    ],
    rationale: "To 'plant' confidence or ideas means to instill them so they grow over time."
  },
  {
    word: "gauge",
    sentence: "Looking at students' facial expressions helps the speaker <strong class='text-amber-300 underline decoration-amber-500'>gauge</strong> whether the presentation is too boring.",
    options: [
      { text: "assess and judge", isTarget: true },
      { text: "read a metal dial", isTarget: false },
      { text: "ignore completely", isTarget: false },
      { text: "stop speaking", isTarget: false },
      { text: "shout into microphones", isTarget: false }
    ],
    rationale: "To 'gauge' interest or feelings means to assess, estimate, and judge them."
  },
  {
    word: "cement",
    sentence: "Helping each other through exam preparation helped <strong class='text-amber-300 underline decoration-amber-500'>cement</strong> their study group as a real team.",
    options: [
      { text: "solidify and unite", isTarget: true },
      { text: "pour gray concrete", isTarget: false },
      { text: "break into pieces", isTarget: false },
      { text: "cancel meetings", isTarget: false },
      { text: "argue over marks", isTarget: false }
    ],
    rationale: "To 'cement' a group or bond means to solidify and make it firm and united."
  },
  {
    word: "dampen",
    sentence: "The small spelling error on page two did not <strong class='text-amber-300 underline decoration-amber-500'>dampen</strong> the judge's praise for the essay.",
    options: [
      { text: "lessen or diminish", isTarget: true },
      { text: "make wet with tea", isTarget: false },
      { text: "turn into ink", isTarget: false },
      { text: "increase greatly", isTarget: false },
      { text: "tear the paper", isTarget: false }
    ],
    rationale: "To 'dampen' praise or excitement means to diminish or lessen its strength."
  },
  {
    word: "cultivate",
    sentence: "Spending an hour in the garden every weekend helps you <strong class='text-amber-300 underline decoration-amber-500'>cultivate</strong> patience and mindfulness.",
    options: [
      { text: "develop and build", isTarget: true },
      { text: "dig up tree weeds", isTarget: false },
      { text: "lose completely", isTarget: false },
      { text: "buy from grocery", isTarget: false },
      { text: "ignore chores", isTarget: false }
    ],
    rationale: "To 'cultivate' a quality like patience means to practice, build, and nurture it."
  },
  {
    word: "mask",
    sentence: "Putting honey into hot lemon tea helps <strong class='text-amber-300 underline decoration-amber-500'>mask</strong> the bitter medicine flavor.",
    options: [
      { text: "disguise and cover", isTarget: true },
      { text: "wear over nose", isTarget: false },
      { text: "spill on tables", isTarget: false },
      { text: "make sourer", isTarget: false },
      { text: "boil in kettles", isTarget: false }
    ],
    rationale: "To 'mask' an unpleasant flavor or emotion means to disguise or cover it up."
  },
  {
    word: "shoulder",
    sentence: "During group projects, everyone should do their part rather than let one student <strong class='text-amber-300 underline decoration-amber-500'>shoulder</strong> all the work.",
    options: [
      { text: "take on or bear", isTarget: true },
      { text: "carry on upper body", isTarget: false },
      { text: "avoid completely", isTarget: false },
      { text: "throw away files", isTarget: false },
      { text: "cancel the project", isTarget: false }
    ],
    rationale: "To 'shoulder' work means to bear the load and take responsibility for it."
  },
  {
    word: "stifle",
    sentence: "Laughing out loud in the quiet library was hard to <strong class='text-amber-300 underline decoration-amber-500'>stifle</strong> after reading the comic.",
    options: [
      { text: "hold back or choke", isTarget: true },
      { text: "cough from cold", isTarget: false },
      { text: "shout openly", isTarget: false },
      { text: "borrow five books", isTarget: false },
      { text: "drop on the floor", isTarget: false }
    ],
    rationale: "To 'stifle' laughter or curiosity means to hold it back or suppress it."
  },
  {
    word: "cater",
    sentence: "The school cafeteria added vegetarian meals to <strong class='text-amber-300 underline decoration-amber-500'>cater</strong> to students with different dietary choices.",
    options: [
      { text: "provide service for", isTarget: true },
      { text: "serve wedding cakes", isTarget: false },
      { text: "charge double price", isTarget: false },
      { text: "ban fresh vegetables", isTarget: false },
      { text: "close food stands", isTarget: false }
    ],
    rationale: "To 'cater' to people means to adapt and provide what meets their needs."
  },
  {
    word: "bloom",
    sentence: "With steady practice and encouraging feedback, her singing talent began to <strong class='text-amber-300 underline decoration-amber-500'>bloom</strong>.",
    options: [
      { text: "flourish and grow", isTarget: true },
      { text: "open like a rose", isTarget: false },
      { text: "fade into silence", isTarget: false },
      { text: "stop singing", isTarget: false },
      { text: "sound discordant", isTarget: false }
    ],
    rationale: "When talent 'blooms', it flourishes, develops beautifully, and reaches its prime."
  }
];