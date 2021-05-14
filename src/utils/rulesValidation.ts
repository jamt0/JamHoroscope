export const rulesName = (texts: any) => ({
  required: texts.field_required,
  minLength: {
    value: 3,
    message: texts.field_name_min,
  },
});

export const rulesEmail = (texts: any) => ({
  required: texts.field_required,
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: texts.field_email_invalid,
  },
});

export const rulesDate = (texts: any) => ({
  required: texts.field_required,
});
