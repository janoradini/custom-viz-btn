
project_name: "jan-tests"

constant: VIS_LABEL {
  value: "Custom button"
  export: override_optional
}

constant: VIS_ID {
  value: "custom_button"
  export:  override_optional
}

visualization: {
  id: "@{VIS_ID}"
  label: "@{VIS_LABEL}"
  file: "custom_button.js"
  dependencies: []
}
