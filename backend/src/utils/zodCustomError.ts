const zodCustomError = (propertyName: string, type: string) => {
  return {
    required_error: `${propertyName} is required`,
    invalid_type_error: `${propertyName} must be ${type}`,
  }
}

export default zodCustomError
