// =============================================
// Digital SAT Practice Portal Configuration
// Official Bluebook-Aligned Settings
// =============================================

const SAT_CONFIG = {
  // Score reporting label: strictly "estimated" per College Board guidelines
  scoreLabel: "estimated",
  
  // Desmos Graphing Calculator API Configuration
  // Placeholder key: Replace with official client key from https://www.desmos.com/api
  desmosApiKey: "dcb31709b452b1cf9dc26972add0fda6", // Desmos public demo API key placeholder
  desmosApiScriptUrl: "https://www.desmos.com/api/v1.9/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6",
  
  // Official Bluebook Module Timing
  timing: {
    rwModuleTimeMinutes: 32,      // 32 minutes per R&W module (27 Qs)
    mathModuleTimeMinutes: 35,    // 35 minutes per Math module (22 Qs)
    breakTimeMinutes: 5           // 5 minutes break between Section 1 and Section 2
  },
  
  // Adaptive Routing Threshold
  // Students scoring >= 70% in Module 1 route to the Hard Module 2
  adaptiveThreshold: 0.70,
  
  // Question Count Standards
  moduleQuestions: {
    rw: 27,
    math: 22
  },
  
  // Hide Legacy / Flawed questions from student-facing portal
  filterLegacyRows: true,
  hideFiveOptionQuestions: true
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SAT_CONFIG;
}

