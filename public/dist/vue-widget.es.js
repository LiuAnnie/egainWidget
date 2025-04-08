import { createElementBlock as l, openBlock as u, createElementVNode as o, Fragment as h, renderList as y, normalizeClass as m, withDirectives as _, vModelRadio as Q, toDisplayString as c, createCommentVNode as k, vModelText as w, resolveComponent as q, createBlock as x, resolveDynamicComponent as v, createVNode as V, createApp as I } from "vue";
const p = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [d, n] of t)
    s[d] = n;
  return s;
}, D = {
  name: "TextEnumQuestion",
  props: {
    question: {
      type: Object,
      required: !0
    },
    modelValue: {
      type: [String, Number],
      default: null
    },
    isDarkMode: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    localValue: {
      get() {
        return this.modelValue;
      },
      set(e) {
        this.$emit("update:modelValue", e);
      }
    }
  }
}, E = { class: "text-enum-question" }, M = { class: "options-container" }, S = ["name", "value"], A = { class: "option-text" };
function C(e, t, s, d, n, r) {
  return u(), l("div", E, [
    o("div", M, [
      (u(!0), l(h, null, y(s.question.options, (a) => (u(), l("label", {
        key: a,
        class: m(["option-label", {
          selected: s.modelValue === a,
          "dark-mode": s.isDarkMode
        }])
      }, [
        _(o("input", {
          type: "radio",
          name: "question-" + s.question.id,
          value: a,
          "onUpdate:modelValue": t[0] || (t[0] = (i) => r.localValue = i),
          class: "option-input"
        }, null, 8, S), [
          [Q, r.localValue]
        ]),
        o("span", A, c(a), 1)
      ], 2))), 128))
    ])
  ]);
}
const P = /* @__PURE__ */ p(D, [["render", C], ["__scopeId", "data-v-7547c3d1"]]), T = {
  name: "ImageEnumQuestion",
  props: {
    question: {
      type: Object,
      required: !0
    },
    modelValue: {
      type: String,
      default: null
    },
    isDarkMode: {
      type: Boolean,
      default: !1
    }
  },
  methods: {
    selectOption(e) {
      this.$emit("update:modelValue", e);
    }
  }
}, N = { class: "image-enum-question" }, B = { class: "options-grid" }, F = ["onClick"], L = ["src", "alt"], U = { class: "option-label" };
function W(e, t, s, d, n, r) {
  return u(), l("div", N, [
    o("div", B, [
      (u(!0), l(h, null, y(s.question.options, (a) => (u(), l("div", {
        key: a.value,
        class: m(["option-card", {
          selected: s.modelValue === a.value,
          "dark-mode": s.isDarkMode
        }]),
        onClick: (i) => r.selectOption(a.value)
      }, [
        o("img", {
          src: a.imageUrl,
          alt: a.label,
          class: "option-image"
        }, null, 8, L),
        o("div", U, c(a.label), 1)
      ], 10, F))), 128))
    ])
  ]);
}
const z = /* @__PURE__ */ p(T, [["render", W], ["__scopeId", "data-v-82eaa79e"]]), O = {
  name: "TextBoxQuestion",
  props: {
    question: {
      type: Object,
      required: !0
    },
    modelValue: {
      type: String,
      default: ""
    },
    isDarkMode: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    localValue: {
      get() {
        return this.modelValue;
      },
      set(e) {
        this.$emit("update:modelValue", e);
      }
    }
  }
}, H = { class: "text-box-question" }, R = { class: "input-container" }, j = {
  key: 0,
  class: "description"
}, G = ["placeholder", "rows"];
function Y(e, t, s, d, n, r) {
  return u(), l("div", H, [
    o("div", R, [
      s.question.description ? (u(), l("div", j, c(s.question.description), 1)) : k("", !0),
      _(o("textarea", {
        "onUpdate:modelValue": t[0] || (t[0] = (a) => r.localValue = a),
        placeholder: s.question.placeholder || "Enter your answer...",
        rows: s.question.rows || 4,
        class: m(["text-input", { "dark-mode": s.isDarkMode }])
      }, null, 10, G), [
        [w, r.localValue]
      ])
    ])
  ]);
}
const J = /* @__PURE__ */ p(O, [["render", Y], ["__scopeId", "data-v-17bfd1c8"]]), K = {
  name: "NumericalQuestion",
  props: {
    question: {
      type: Object,
      required: !0
    },
    modelValue: {
      type: [Number, String],
      default: null
    },
    isDarkMode: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    var e;
    return {
      inputValue: ((e = this.modelValue) == null ? void 0 : e.toString()) ?? ""
    };
  },
  watch: {
    modelValue(e) {
      this.inputValue = (e == null ? void 0 : e.toString()) ?? "";
    }
  },
  computed: {
    showError() {
      const e = Number(this.inputValue);
      if (this.inputValue === "" || isNaN(e)) return !1;
      const t = this.question.min, s = this.question.max;
      return t !== void 0 && e < t || s !== void 0 && e > s;
    },
    errorMessage() {
      const e = Number(this.inputValue), t = this.question.min, s = this.question.max;
      return t !== void 0 && e < t ? "An employee ID is an 8-digit number that begins with a non-zero digit." : s !== void 0 && e > s ? `Value must be at most ${s}.` : `Value must be between ${t} and ${s}.`;
    }
  },
  methods: {
    handleInput(e) {
      const s = e.target.value.replace(/\D/g, "").slice(0, 8);
      this.inputValue = s;
      const d = Number(s);
      s !== "" && !isNaN(d) && (this.question.min === void 0 || d >= this.question.min) && (this.question.max === void 0 || d <= this.question.max) ? this.$emit("update:modelValue", d) : this.$emit("update:modelValue", null);
    }
  }
}, X = { class: "numerical-question" }, Z = { class: "input-container" }, $ = {
  key: 0,
  class: "description"
}, ee = ["placeholder"];
function te(e, t, s, d, n, r) {
  return u(), l("div", X, [
    o("div", Z, [
      s.question.description ? (u(), l("div", $, c(s.question.description), 1)) : k("", !0),
      _(o("input", {
        type: "text",
        "onUpdate:modelValue": t[0] || (t[0] = (a) => n.inputValue = a),
        onInput: t[1] || (t[1] = (...a) => r.handleInput && r.handleInput(...a)),
        placeholder: s.question.placeholder || `Enter a number (${s.question.min}-${s.question.max})`,
        class: m(["number-input", { "dark-mode": s.isDarkMode, "has-error": r.showError }])
      }, null, 42, ee), [
        [w, n.inputValue]
      ])
    ])
  ]);
}
const se = /* @__PURE__ */ p(K, [["render", te], ["__scopeId", "data-v-74235f52"]]), b = {
  async getQuestions(e) {
    return await new Promise((t) => setTimeout(t, 500)), [
      {
        id: 1,
        type: "text-enum",
        text: "What type of HR question do you have?",
        options: [
          "Benefits-related (Health Insurance, Retirement Plans)",
          "Timesheet Submission Process",
          "Holiday or Vacation Policies",
          "Payroll Information",
          "HR Policies and Procedures",
          "Sick Leave or Paid Time Off",
          "Office Attendance Policies"
        ]
      },
      {
        id: 2,
        type: "image-enum",
        text: "Which communication style would you prefer for this matter?",
        options: [
          { value: "AI summary", label: "AI Summary", imageUrl: "public/images/textguide.svg" },
          { value: "link to company documentation", label: "Company Documentation", imageUrl: "public/images/docs.svg" },
          { value: "video", label: "Video Walkthrough", imageUrl: "public/images/video.svg" }
        ]
      },
      {
        id: 3,
        type: "text-box",
        text: "Additional Information",
        description: "Please provide any additional information you would like to include in your request.",
        placeholder: 'If inapplicable, type "N/A".',
        rows: 4
      },
      {
        id: 4,
        type: "numerical",
        text: "Your Employee ID",
        description: "An employee ID is an 8-digit number that begins with a non-zero digit.",
        min: 1e7,
        max: 99999999,
        placeholder: "12345678"
      }
    ];
  },
  async getSolution(e) {
    return await new Promise((s) => setTimeout(s, 1e3)), this.generateSolution(e);
  },
  generateSolution(e) {
    const t = e[1] || "unknown", s = e[2] || "unknown";
    e[3];
    const d = e[4] || "unknown", n = s.toLowerCase().startsWith("ai") ? "an" : "a";
    return `
    Initial Request: "${e.problemDescription || "No initial request provided"}"

    <br><br>We've received your request on information about ${t}.
    We'll send ${n} ${s} to your email address.
    Typical response time is 2 minutes, but more complicated requests can take up to 2 hours.
    Thank you for your patience.<br><br>
    Request successfully processed for employee ${d}.
    `;
  },
  async submitFeedback(e) {
    return await new Promise((t) => setTimeout(t, 300)), console.log("Feedback submitted:", e), { success: !0 };
  }
}, ne = {
  name: "LoadingSpinner",
  props: {
    isDarkMode: {
      type: Boolean,
      default: !1
    }
  }
};
function ie(e, t, s, d, n, r) {
  return u(), l("div", {
    class: m(["loading-spinner", { "dark-mode": s.isDarkMode }])
  }, t[0] || (t[0] = [
    o("div", { class: "spinner" }, null, -1),
    o("div", { class: "loading-text" }, "Processing your request...", -1)
  ]), 2);
}
const oe = /* @__PURE__ */ p(ne, [["render", ie], ["__scopeId", "data-v-e1d915a2"]]), re = {
  name: "InteractiveGuidanceWidget",
  components: {
    TextEnumQuestion: P,
    ImageEnumQuestion: z,
    TextBoxQuestion: J,
    NumericalQuestion: se,
    LoadingSpinner: oe
  },
  props: {
    config: {
      type: Object,
      default: () => ({
        logo: "/default-logo.png",
        colors: {
          primary: "#470FF4",
          secondary: "#89AAE6",
          background: "#EBFFED",
          text: "#2E3532",
          accent: "#2F242C"
        },
        fonts: {
          primary: "Arial, sans-serif",
          sizes: {
            heading: "24px",
            subheading: "18px",
            body: "16px"
          }
        },
        presentation: "single"
        // Set to 'single' for a single question at a time, 'multiple' for all questions at once.
      })
    },
    isDarkMode: {
      type: Boolean,
      default: !1
    },
    headerText: {
      type: String,
      default: "MyHR"
    }
  },
  data() {
    return {
      userProblem: "",
      problemDescription: "",
      currentQuestions: [],
      currentQuestionIndex: 0,
      answeredQuestions: [],
      answers: {},
      solution: null,
      feedback: null,
      showSolution: !1,
      isLoading: !1,
      isDarkMode: !1
    };
  },
  computed: {
    widgetStyle() {
      return {
        "--primary-color": this.config.colors.primary,
        "--secondary-color": this.config.colors.secondary,
        "--text-color": this.config.colors.text,
        "--accent-color": this.config.colors.accent,
        "--font-primary": this.config.fonts.primary,
        "--heading-size": this.config.fonts.sizes.heading,
        "--subheading-size": this.config.fonts.sizes.subheading,
        "--body-size": this.config.fonts.sizes.body,
        "--background-color": this.isDarkMode ? "#1a1a1a" : this.config.colors.background
      };
    },
    canSubmitAnswers() {
      return this.currentQuestions.every((e) => this.answers[e.id] !== void 0);
    }
  },
  mounted() {
    this.isDarkMode = this.checkSystemDarkMode(), window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      this.isDarkMode = e.matches;
    });
  },
  beforeUnmount() {
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", this.checkSystemDarkMode);
  },
  methods: {
    checkSystemDarkMode() {
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    },
    async submitProblem() {
      this.problemDescription = this.userProblem, await this.fetchQuestions();
    },
    async fetchQuestions() {
      try {
        this.currentQuestions = await b.getQuestions(this.problemDescription);
      } catch (e) {
        console.error("Error fetching questions:", e);
      }
    },
    getQuestionComponent(e) {
      return {
        "text-enum": "TextEnumQuestion",
        "image-enum": "ImageEnumQuestion",
        "text-box": "TextBoxQuestion",
        numerical: "NumericalQuestion"
      }[e] || "TextBoxQuestion";
    },
    async submitAnswers() {
      this.isLoading = !0, this.answeredQuestions = this.currentQuestions.map((e) => ({
        question: e.text,
        answer: this.answers[e.id],
        id: e.id,
        type: e.type,
        options: e.options,
        min: e.min,
        max: e.max,
        description: e.description,
        placeholder: e.placeholder,
        isEditing: !1
      })), this.currentQuestions = [];
      try {
        await new Promise((e) => setTimeout(e, 1500)), this.answers.problemDescription = this.problemDescription, this.solution = await b.getSolution(this.answers), this.showSolution = !0;
      } catch (e) {
        console.error("Error fetching solution:", e), this.solution = "Sorry, there was an error generating your solution. Please try again.", this.showSolution = !0;
      } finally {
        this.isLoading = !1;
      }
    },
    editAnswer(e) {
      this.answeredQuestions.forEach((t) => t.isEditing = !1), this.answeredQuestions[e].isEditing = !0, this.answers[this.answeredQuestions[e].id] = this.answeredQuestions[e].answer;
    },
    async saveAnswer(e) {
      if (e.type === "numerical") {
        const t = Number(this.answers[e.id]);
        if (isNaN(t) || e.min !== void 0 && t < e.min || e.max !== void 0 && t > e.max) {
          this.answers[e.id] = e.answer, e.isEditing = !1;
          return;
        }
      }
      e.isEditing = !1, e.answer = this.answers[e.id], this.isLoading = !0;
      try {
        await new Promise((t) => setTimeout(t, 1500)), this.solution = await b.getSolution(this.answers);
      } catch (t) {
        console.error("Error fetching solution:", t), this.solution = "Sorry, there was an error generating your solution. Please try again.";
      } finally {
        this.isLoading = !1;
      }
    },
    cancelEdit(e) {
      e.isEditing = !1, this.answers[e.id] = e.answer;
    },
    formatAnswer(e) {
      return Array.isArray(e) ? e.join(", ") : e ?? "Not answered";
    },
    async submitFeedback(e) {
      this.feedback = e;
      try {
        await b.submitFeedback(e);
      } catch (t) {
        console.error("Error submitting feedback:", t);
      }
    },
    resetWidget() {
      this.answers = {}, this.currentQuestions = [], this.answeredQuestions = [], this.solution = null, this.feedback = null, this.problemDescription = "", this.userProblem = "", this.showSolution = !1;
    },
    startQuestions() {
      this.submitProblem();
    },
    handleUserProblemInput() {
    },
    goToNextQuestion() {
      this.currentQuestionIndex < this.currentQuestions.length - 1 ? this.currentQuestionIndex++ : this.submitAnswers();
    },
    goBack() {
      this.currentQuestionIndex > 0 ? this.currentQuestionIndex-- : (this.currentQuestions = [], this.userProblem = "");
    },
    handleContinue() {
      if (this.currentQuestion === null) {
        if (!this.userProblem.trim())
          return;
        this.answeredQuestions.push({
          question: "How can I help you?",
          answer: this.userProblem,
          isEditing: !1
        }), this.currentQuestion = this.questions[0], this.currentQuestionIndex = 0;
        return;
      }
      if (this.currentQuestion.type === "enum" && !this.selectedAnswer)
        return;
      this.answeredQuestions.push({
        question: this.currentQuestion.text,
        answer: this.selectedAnswer,
        isEditing: !1
      });
      const e = this.questions.findIndex((t) => t.id === this.currentQuestion.id);
      e < this.questions.length - 1 ? (this.currentQuestion = this.questions[e + 1], this.currentQuestionIndex = e + 1, this.selectedAnswer = null) : (this.currentQuestion = null, this.currentQuestionIndex = -1);
    }
  }
}, ue = { class: "widget-header" }, le = ["src"], ae = { class: "widget-content" }, de = {
  key: 0,
  class: "user-problem"
}, ce = ["disabled"], me = {
  key: 1,
  class: "questions-section"
}, he = { class: "question-container" }, pe = ["disabled"], fe = ["disabled"], ge = {
  key: 2,
  class: "solution-container"
}, be = {
  key: 3,
  class: "solution-section"
}, ye = ["innerHTML"], ke = { class: "answered-questions" }, _e = { class: "question-header" }, xe = ["onClick"], ve = {
  key: 0,
  class: "edit-answer"
}, we = { class: "edit-buttons" }, Qe = ["onClick"], qe = ["onClick"], Ve = {
  key: 1,
  class: "answer-display"
}, Ie = { class: "feedback-section" }, De = { class: "feedback-buttons" };
function Ee(e, t, s, d, n, r) {
  const a = q("LoadingSpinner");
  return u(), l("div", {
    class: m(["guidance-widget", { "dark-mode": n.isDarkMode }])
  }, [
    o("div", ue, [
      o("h2", null, c(s.headerText), 1),
      o("img", {
        src: s.config.logo,
        alt: "Logo",
        class: "widget-logo"
      }, null, 8, le)
    ]),
    o("div", ae, [
      !n.currentQuestions.length && !n.answeredQuestions.length ? (u(), l("div", de, [
        t[10] || (t[10] = o("h3", null, "How can I help you?", -1)),
        _(o("textarea", {
          "onUpdate:modelValue": t[0] || (t[0] = (i) => n.userProblem = i),
          placeholder: "In 1-2 sentences, describe your HR request...",
          onInput: t[1] || (t[1] = (...i) => r.handleUserProblemInput && r.handleUserProblemInput(...i))
        }, null, 544), [
          [w, n.userProblem]
        ]),
        o("button", {
          onClick: t[2] || (t[2] = (...i) => r.startQuestions && r.startQuestions(...i)),
          disabled: !n.userProblem.trim()
        }, " Continue ", 8, ce)
      ])) : n.currentQuestions.length > 0 ? (u(), l("div", me, [
        o("button", {
          class: "back-button",
          onClick: t[3] || (t[3] = (...i) => r.goBack && r.goBack(...i))
        }, " ← "),
        o("div", he, [
          s.config.presentation === "single" ? (u(), l(h, { key: 0 }, [
            o("h3", null, c(n.currentQuestions[n.currentQuestionIndex].text), 1),
            (u(), x(v(r.getQuestionComponent(n.currentQuestions[n.currentQuestionIndex].type)), {
              question: n.currentQuestions[n.currentQuestionIndex],
              modelValue: n.answers[n.currentQuestions[n.currentQuestionIndex].id],
              "onUpdate:modelValue": t[4] || (t[4] = (i) => n.answers[n.currentQuestions[n.currentQuestionIndex].id] = i),
              "is-dark-mode": n.isDarkMode
            }, null, 8, ["question", "modelValue", "is-dark-mode"])),
            o("button", {
              onClick: t[5] || (t[5] = (...i) => r.goToNextQuestion && r.goToNextQuestion(...i)),
              disabled: !n.answers[n.currentQuestions[n.currentQuestionIndex].id],
              class: "continue-button"
            }, " Continue ", 8, pe)
          ], 64)) : (u(), l(h, { key: 1 }, [
            (u(!0), l(h, null, y(n.currentQuestions, (i) => (u(), l("div", {
              key: i.id,
              class: "question-item"
            }, [
              o("h3", null, c(i.text), 1),
              (u(), x(v(r.getQuestionComponent(i.type)), {
                question: i,
                modelValue: n.answers[i.id],
                "onUpdate:modelValue": (f) => n.answers[i.id] = f,
                "is-dark-mode": n.isDarkMode
              }, null, 8, ["question", "modelValue", "onUpdate:modelValue", "is-dark-mode"]))
            ]))), 128)),
            o("button", {
              onClick: t[6] || (t[6] = (...i) => r.submitAnswers && r.submitAnswers(...i)),
              disabled: !r.canSubmitAnswers,
              class: "continue-button"
            }, " Submit ", 8, fe)
          ], 64))
        ])
      ])) : n.isLoading ? (u(), l("div", ge, [
        V(a, { "is-dark-mode": n.isDarkMode }, null, 8, ["is-dark-mode"])
      ])) : k("", !0),
      n.solution && n.showSolution ? (u(), l("div", be, [
        t[13] || (t[13] = o("h3", null, "Based on your request:", -1)),
        o("p", { innerHTML: n.solution }, null, 8, ye),
        o("div", ke, [
          t[11] || (t[11] = o("h4", null, "Your Answers", -1)),
          (u(!0), l(h, null, y(n.answeredQuestions, (i, f) => (u(), l("div", {
            key: f,
            class: "answered-question"
          }, [
            o("div", _e, [
              o("h5", null, c(i.question), 1),
              o("span", {
                class: "edit-icon",
                onClick: (g) => r.editAnswer(f)
              }, "✎", 8, xe)
            ]),
            i.isEditing ? (u(), l("div", ve, [
              (u(), x(v(r.getQuestionComponent(i.type)), {
                question: {
                  id: i.id,
                  type: i.type,
                  text: i.question,
                  options: i.options,
                  placeholder: i.placeholder,
                  min: i.min,
                  max: i.max,
                  description: i.description
                },
                modelValue: n.answers[i.id],
                "onUpdate:modelValue": (g) => n.answers[i.id] = g,
                "is-dark-mode": n.isDarkMode
              }, null, 8, ["question", "modelValue", "onUpdate:modelValue", "is-dark-mode"])),
              o("div", we, [
                o("button", {
                  class: "cancel-button",
                  onClick: (g) => r.cancelEdit(i)
                }, "Cancel", 8, Qe),
                o("button", {
                  class: "save-button primary-button",
                  onClick: (g) => r.saveAnswer(i)
                }, "Save", 8, qe)
              ])
            ])) : (u(), l("div", Ve, c(i.answer), 1))
          ]))), 128))
        ]),
        o("div", Ie, [
          t[12] || (t[12] = o("h4", null, "Was this helpful?", -1)),
          o("div", De, [
            o("button", {
              onClick: t[7] || (t[7] = (i) => r.submitFeedback(!0)),
              class: m(["feedback-button", { selected: n.feedback === !0 }])
            }, " 👍 ", 2),
            o("button", {
              onClick: t[8] || (t[8] = (i) => r.submitFeedback(!1)),
              class: m(["feedback-button", { selected: n.feedback === !1 }])
            }, " 👎 ", 2)
          ]),
          o("button", {
            onClick: t[9] || (t[9] = (...i) => r.resetWidget && r.resetWidget(...i)),
            class: "continue-button"
          }, "Done")
        ])
      ])) : k("", !0)
    ])
  ], 2);
}
const Me = /* @__PURE__ */ p(re, [["render", Ee], ["__scopeId", "data-v-f08f5be4"]]);
class Se {
  constructor(t = {}) {
    this.options = {
      target: t.target || "#vue-widget",
      config: t.config || {
        logo: "/default-logo.png",
        colors: {
          primary: "#470FF4",
          secondary: "#89AAE6",
          background: "#EBFFED",
          text: "#2E3532",
          accent: "#2F242C"
        },
        fonts: {
          primary: "Arial, sans-serif",
          sizes: {
            heading: "24px",
            subheading: "18px",
            body: "16px"
          }
        }
      },
      headerText: t.headerText || "MyHR",
      isDarkMode: t.isDarkMode || !1
    };
  }
  mount() {
    const t = document.querySelector(this.options.target);
    if (!t)
      throw new Error(`Target element "${this.options.target}" not found`);
    const s = I(Me, {
      config: this.options.config,
      headerText: this.options.headerText,
      isDarkMode: this.options.isDarkMode
    });
    return s.mount(t), s;
  }
}
typeof window < "u" && (window.VueWidget = Se);
export {
  Se as default
};
