export const theme = {
  "extend": {
    "colors": {
      "border": {
        "error": {
          "DEFAULT": "var(--border-error)"
        },
        "danger": {
          "DEFAULT": "var(--border-danger)"
        },
        "interactive": {
          "DEFAULT": "var(--border-interactive)"
        },
        "base": {
          "DEFAULT": "var(--border-base)"
        },
        "strong": {
          "DEFAULT": "var(--border-strong)"
        },
        "loud": {
          "DEFAULT": "var(--border-loud)"
        },
        "transparent": {
          "DEFAULT": "var(--border-transparent)"
        },
        "blue": {
          "outline": {
            "DEFAULT": "var(--border-blue-outline)"
          },
          "lighter": {
            "DEFAULT": "var(--border-blue-lighter)"
          }
        },
        "neutral": {
          "outline": {
            "DEFAULT": "var(--border-neutral-outline)"
          },
          "lighter": {
            "DEFAULT": "var(--border-neutral-lighter)"
          }
        },
        "cyan": {
          "outline": {
            "DEFAULT": "var(--border-cyan-outline)"
          },
          "lighter": {
            "DEFAULT": "var(--border-cyan-lighter)"
          }
        },
        "emerald": {
          "lighter": {
            "DEFAULT": "var(--border-emerald-lighter)"
          },
          "outline": {
            "DEFAULT": "var(--border-emerald-outline)"
          }
        },
        "red": {
          "lighter": {
            "DEFAULT": "var(--border-red-lighter)"
          },
          "outline": {
            "DEFAULT": "var(--border-red-outline)"
          }
        },
        "yellow": {
          "outline": {
            "DEFAULT": "var(--border-yellow-outline)"
          },
          "lighter": {
            "DEFAULT": "var(--border-yellow-lighter)"
          }
        }
      },
      "fg": {
        "subtle": {
          "DEFAULT": "var(--fg-subtle)"
        },
        "disabled": {
          "DEFAULT": "var(--fg-disabled)"
        },
        "base": {
          "DEFAULT": "var(--fg-base)"
        },
        "interactive": {
          "DEFAULT": "var(--fg-interactive)",
          "hover": {
            "DEFAULT": "var(--fg-interactive-hover)"
          }
        },
        "error": {
          "DEFAULT": "var(--fg-error)"
        },
        "on": {
          "color": {
            "DEFAULT": "var(--fg-on-color)"
          },
          "inverted": {
            "DEFAULT": "var(--fg-on-inverted)"
          }
        },
        "muted": {
          "DEFAULT": "var(--fg-muted)"
        },
        "blue": {
          "outline": {
            "DEFAULT": "var(--fg-blue-outline)"
          },
          "light": {
            "DEFAULT": "var(--fg-blue-light)"
          },
          "lighter": {
            "DEFAULT": "var(--fg-blue-lighter)"
          }
        },
        "cyan": {
          "light": {
            "DEFAULT": "var(--fg-cyan-light)"
          },
          "lighter": {
            "DEFAULT": "var(--fg-cyan-lighter)"
          }
        },
        "neutral": {
          "light": {
            "DEFAULT": "var(--fg-neutral-light)"
          },
          "lighter": {
            "DEFAULT": "var(--fg-neutral-lighter)"
          }
        },
        "red": {
          "lighter": {
            "DEFAULT": "var(--fg-red-lighter)"
          },
          "light": {
            "DEFAULT": "var(--fg-red-light)"
          }
        },
        "yellow": {
          "lighter": {
            "DEFAULT": "var(--fg-yellow-lighter)"
          },
          "light": {
            "DEFAULT": "var(--fg-yellow-light)"
          }
        },
        "emerald": {
          "light": {
            "DEFAULT": "var(--fg-emerald-light)"
          },
          "lighter": {
            "DEFAULT": "var(--fg-emerald-lighter)"
          }
        }
      },
      "button": {
        "neutral": {
          "hover": {
            "DEFAULT": "var(--button-neutral-hover)"
          },
          "DEFAULT": "var(--button-neutral)",
          "pressed": {
            "DEFAULT": "var(--button-neutral-pressed)"
          }
        },
        "danger": {
          "pressed": {
            "DEFAULT": "var(--button-danger-pressed)"
          },
          "DEFAULT": "var(--button-danger)",
          "hover": {
            "DEFAULT": "var(--button-danger-hover)"
          }
        },
        "inverted": {
          "pressed": {
            "DEFAULT": "var(--button-inverted-pressed)"
          },
          "hover": {
            "DEFAULT": "var(--button-inverted-hover)"
          },
          "DEFAULT": "var(--button-inverted)"
        },
        "transparent": {
          "DEFAULT": "var(--button-transparent)",
          "hover": {
            "DEFAULT": "var(--button-transparent-hover)"
          },
          "pressed": {
            "DEFAULT": "var(--button-transparent-pressed)"
          }
        },
        "warning": {
          "DEFAULT": "var(--button-warning)",
          "hover": {
            "DEFAULT": "var(--button-warning-hover)"
          },
          "pressed": {
            "DEFAULT": "var(--button-warning-pressed)"
          }
        },
        "success": {
          "pressed": {
            "DEFAULT": "var(--button-success-pressed)"
          },
          "hover": {
            "DEFAULT": "var(--button-success-hover)"
          },
          "DEFAULT": "var(--button-success)"
        },
        "blue": {
          "pressed": {
            "DEFAULT": "var(--button-blue-pressed)"
          },
          "hover": {
            "DEFAULT": "var(--button-blue-hover)"
          },
          "DEFAULT": "var(--button-blue)"
        }
      },
      "contrast": {
        "fg": {
          "primary": {
            "DEFAULT": "var(--contrast-fg-primary)"
          },
          "secondary": {
            "DEFAULT": "var(--contrast-fg-secondary)"
          }
        },
        "border": {
          "base": {
            "DEFAULT": "var(--contrast-border-base)"
          }
        },
        "bg": {
          "highlight": {
            "DEFAULT": "var(--contrast-bg-highlight)"
          },
          "base": {
            "pressed": {
              "DEFAULT": "var(--contrast-bg-base-pressed)"
            },
            "hover": {
              "DEFAULT": "var(--contrast-bg-base-hover)"
            },
            "DEFAULT": "var(--contrast-bg-base)"
          },
          "subtle": {
            "DEFAULT": "var(--contrast-bg-subtle)"
          }
        }
      },
      "bg": {
        "component": {
          "DEFAULT": "var(--bg-component)",
          "hover": {
            "DEFAULT": "var(--bg-component-hover)"
          },
          "pressed": {
            "DEFAULT": "var(--bg-component-pressed)"
          }
        },
        "disabled": {
          "DEFAULT": "var(--bg-disabled)"
        },
        "field": {
          "component": {
            "DEFAULT": "var(--bg-field-component)",
            "hover": {
              "DEFAULT": "var(--bg-field-component-hover)"
            }
          },
          "DEFAULT": "var(--bg-field)",
          "hover": {
            "DEFAULT": "var(--bg-field-hover)"
          }
        },
        "base": {
          "pressed": {
            "DEFAULT": "var(--bg-base-pressed)"
          },
          "DEFAULT": "var(--bg-base)",
          "hover": {
            "DEFAULT": "var(--bg-base-hover)"
          }
        },
        "subtle": {
          "DEFAULT": "var(--bg-subtle)",
          "hover": {
            "DEFAULT": "var(--bg-subtle-hover)"
          },
          "pressed": {
            "DEFAULT": "var(--bg-subtle-pressed)"
          }
        },
        "highlight": {
          "DEFAULT": "var(--bg-highlight)",
          "hover": {
            "DEFAULT": "var(--bg-highlight-hover)"
          }
        },
        "overlay": {
          "DEFAULT": "var(--bg-overlay)"
        },
        "interactive": {
          "DEFAULT": "var(--bg-interactive)"
        },
        "cyan": {
          "outline": {
            "hover": {
              "DEFAULT": "var(--bg-cyan-outline-hover)"
            }
          },
          "light": {
            "hover": {
              "DEFAULT": "var(--bg-cyan-light-hover)"
            },
            "DEFAULT": "var(--bg-cyan-light)"
          },
          "fill": {
            "DEFAULT": "var(--bg-cyan-fill)",
            "hover": {
              "DEFAULT": "var(--bg-cyan-fill-hover)"
            }
          },
          "subtle": {
            "hover": {
              "DEFAULT": "var(--bg-cyan-subtle-hover)"
            }
          },
          "lighter": {
            "DEFAULT": "var(--bg-cyan-lighter)"
          }
        },
        "emerald": {
          "light": {
            "hover": {
              "DEFAULT": "var(--bg-emerald-light-hover)"
            },
            "DEFAULT": "var(--bg-emerald-light)"
          },
          "outline": {
            "hover": {
              "DEFAULT": "var(--bg-emerald-outline-hover)"
            }
          },
          "subtle": {
            "hover": {
              "DEFAULT": "var(--bg-emerald-subtle-hover)"
            }
          },
          "lighter": {
            "DEFAULT": "var(--bg-emerald-lighter)"
          },
          "fill": {
            "DEFAULT": "var(--bg-emerald-fill)",
            "hover": {
              "DEFAULT": "var(--bg-emerald-fill-hover)"
            }
          }
        },
        "yellow": {
          "light": {
            "hover": {
              "DEFAULT": "var(--bg-yellow-light-hover)"
            },
            "DEFAULT": "var(--bg-yellow-light)"
          },
          "outline": {
            "hover": {
              "DEFAULT": "var(--bg-yellow-outline-hover)"
            }
          },
          "fill": {
            "DEFAULT": "var(--bg-yellow-fill)",
            "hover": {
              "DEFAULT": "var(--bg-yellow-fill-hover)"
            }
          },
          "subtle": {
            "hover": {
              "DEFAULT": "var(--bg-yellow-subtle-hover)"
            }
          },
          "lighter": {
            "DEFAULT": "var(--bg-yellow-lighter)"
          }
        },
        "red": {
          "outline": {
            "hover": {
              "DEFAULT": "var(--bg-red-outline-hover)"
            }
          },
          "light": {
            "DEFAULT": "var(--bg-red-light)",
            "hover": {
              "DEFAULT": "var(--bg-red-light-hover)"
            }
          },
          "fill": {
            "DEFAULT": "var(--bg-red-fill)",
            "hover": {
              "DEFAULT": "var(--bg-red-fill-hover)"
            }
          },
          "subtle": {
            "hover": {
              "DEFAULT": "var(--bg-red-subtle-hover)"
            }
          },
          "lighter": {
            "DEFAULT": "var(--bg-red-lighter)"
          }
        },
        "neutral": {
          "outline": {
            "hover": {
              "DEFAULT": "var(--bg-neutral-outline-hover)"
            }
          },
          "lighter": {
            "DEFAULT": "var(--bg-neutral-lighter)"
          },
          "light": {
            "hover": {
              "DEFAULT": "var(--bg-neutral-light-hover)"
            },
            "DEFAULT": "var(--bg-neutral-light)"
          },
          "subtle": {
            "hover": {
              "DEFAULT": "var(--bg-neutral-subtle-hover)"
            }
          },
          "fill": {
            "DEFAULT": "var(--bg-neutral-fill)",
            "hover": {
              "DEFAULT": "var(--bg-neutral-fill-hover)"
            }
          }
        },
        "blue": {
          "lighter": {
            "DEFAULT": "var(--bg-blue-lighter)"
          },
          "subtle": {
            "hover": {
              "DEFAULT": "var(--bg-blue-subtle-hover)"
            }
          },
          "fill": {
            "DEFAULT": "var(--bg-blue-fill)",
            "hover": {
              "DEFAULT": "var(--bg-blue-fill-hover)"
            }
          },
          "light": {
            "hover": {
              "DEFAULT": "var(--bg-blue-light-hover)"
            },
            "DEFAULT": "var(--bg-blue-light)"
          },
          "outline": {
            "hover": {
              "DEFAULT": "var(--bg-blue-outline-hover)"
            }
          }
        }
      },
      "tag": {
        "orange": {
          "icon": {
            "DEFAULT": "var(--tag-orange-icon)"
          },
          "border": {
            "DEFAULT": "var(--tag-orange-border)"
          },
          "bg": {
            "DEFAULT": "var(--tag-orange-bg)",
            "hover": {
              "DEFAULT": "var(--tag-orange-bg-hover)"
            }
          },
          "text": {
            "DEFAULT": "var(--tag-orange-text)"
          }
        },
        "blue": {
          "border": {
            "DEFAULT": "var(--tag-blue-border)"
          },
          "bg": {
            "hover": {
              "DEFAULT": "var(--tag-blue-bg-hover)"
            },
            "DEFAULT": "var(--tag-blue-bg)"
          },
          "text": {
            "DEFAULT": "var(--tag-blue-text)"
          },
          "icon": {
            "DEFAULT": "var(--tag-blue-icon)"
          }
        },
        "red": {
          "bg": {
            "DEFAULT": "var(--tag-red-bg)",
            "hover": {
              "DEFAULT": "var(--tag-red-bg-hover)"
            }
          },
          "text": {
            "DEFAULT": "var(--tag-red-text)"
          },
          "border": {
            "DEFAULT": "var(--tag-red-border)"
          },
          "icon": {
            "DEFAULT": "var(--tag-red-icon)"
          }
        },
        "neutral": {
          "text": {
            "DEFAULT": "var(--tag-neutral-text)"
          },
          "bg": {
            "hover": {
              "DEFAULT": "var(--tag-neutral-bg-hover)"
            },
            "DEFAULT": "var(--tag-neutral-bg)"
          },
          "border": {
            "DEFAULT": "var(--tag-neutral-border)"
          },
          "icon": {
            "DEFAULT": "var(--tag-neutral-icon)"
          }
        },
        "purple": {
          "text": {
            "DEFAULT": "var(--tag-purple-text)"
          },
          "bg": {
            "hover": {
              "DEFAULT": "var(--tag-purple-bg-hover)"
            },
            "DEFAULT": "var(--tag-purple-bg)"
          },
          "icon": {
            "DEFAULT": "var(--tag-purple-icon)"
          },
          "border": {
            "DEFAULT": "var(--tag-purple-border)"
          }
        },
        "green": {
          "bg": {
            "DEFAULT": "var(--tag-green-bg)",
            "hover": {
              "DEFAULT": "var(--tag-green-bg-hover)"
            }
          },
          "text": {
            "DEFAULT": "var(--tag-green-text)"
          },
          "icon": {
            "DEFAULT": "var(--tag-green-icon)"
          },
          "border": {
            "DEFAULT": "var(--tag-green-border)"
          }
        }
      },
      "code": {
        "border": {
          "DEFAULT": "var(--code-border)"
        },
        "fg": {
          "base": {
            "DEFAULT": "var(--code-fg-base)"
          },
          "subtle": {
            "DEFAULT": "var(--code-fg-subtle)"
          },
          "muted": {
            "DEFAULT": "var(--code-fg-muted)"
          }
        },
        "bg": {
          "subtle": {
            "DEFAULT": "var(--code-bg-subtle)"
          },
          "base": {
            "DEFAULT": "var(--code-bg-base)"
          }
        }
      }
    },
    "boxShadow": {
      "borders-interactive-with-shadow": "var(--borders-interactive-with-shadow)",
      "elevation-card-hover": "var(--elevation-card-hover)",
      "buttons-inverted": "var(--buttons-inverted)",
      "details-commandbar": "var(--details-commandbar)",
      "elevation-tooltip": "var(--elevation-tooltip)",
      "details-contrast-on-bg-interactive": "var(--details-contrast-on-bg-interactive)",
      "buttons-inverted-focus": "var(--buttons-inverted-focus)",
      "borders-interactive-with-focus": "var(--borders-interactive-with-focus)",
      "details-switch-background": "var(--details-switch-background)",
      "borders-interactive-with-active": "var(--borders-interactive-with-active)",
      "buttons-danger-focus": "var(--buttons-danger-focus)",
      "borders-error": "var(--borders-error)",
      "borders-focus": "var(--borders-focus)",
      "elevation-card-rest": "var(--elevation-card-rest)",
      "buttons-neutral-focus": "var(--buttons-neutral-focus)",
      "buttons-neutral": "var(--buttons-neutral)",
      "elevation-modal": "var(--elevation-modal)",
      "borders-base": "var(--borders-base)",
      "details-switch-background-focus": "var(--details-switch-background-focus)",
      "details-switch-handle": "var(--details-switch-handle)",
      "elevation-flyout": "var(--elevation-flyout)",
      "buttons-danger": "var(--buttons-danger)",
      "buttons-success": "var(--buttons-success)",
      "buttons-success-focus": "var(--buttons-success-focus)",
      "buttons-blue": "var(--buttons-blue)",
      "buttons-blue-focus": "var(--buttons-blue-focus)",
      "buttons-warning": "var(--buttons-warning)",
      "buttons-warning-focus": "var(--buttons-warning-focus)"
    }
  }
}