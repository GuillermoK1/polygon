export const useColor = () => {  
    const primaryColor = useState('primary-color', () => {
      if (typeof window !== 'undefined') {
        return localStorage.getItem('primary-color') || 'blue'
      }
      return 'blue'
    })

    const secondaryColor = useState('secondary-color', () => {
      if (typeof window !== 'undefined') {
        return localStorage.getItem('secondary-color') || 'indigo'
      }
      return 'indigo'
    })
    
    const terciaryColor = useState('terciary-color', () => {
      if (typeof window !== 'undefined') {
        return localStorage.getItem('terciary-color') || 'teal'
      }
      return 'teal'
    })

    const colorOptions = [
      { label: 'Gray', value: 'gray' },
      { label: 'Red', value: 'red' },
      { label: 'Orange', value: 'orange' },
      { label: 'Yellow', value: 'yellow' },
      { label: 'Green', value: 'green' },
      { label: 'Emerald', value: 'emerald' },
      { label: 'Teal', value: 'teal' },
      { label: 'Blue', value: 'blue' },
      { label: 'Indigo', value: 'indigo' },
      { label: 'Purple', value: 'purple' },
      { label: 'Pink', value: 'pink' }
    ]
  
    const setPrimaryColor = (newColor: string) => {
      primaryColor.value = newColor
      if (typeof window !== 'undefined') {
        localStorage.setItem('primary-color', newColor)
      }
    }

    const setSecondaryColor = (newColor: string) => {
      secondaryColor.value = newColor
      if (typeof window !== 'undefined') {
        localStorage.setItem('secondary-color', newColor)
      }
    }

    const setTerciaryColor = (newColor: string) => {
      terciaryColor.value = newColor
      if (typeof window !== 'undefined') {
        localStorage.setItem('terciary-color', newColor)
      }
    }
  
    return {
      primaryColor,
      secondaryColor,
      terciaryColor,
      colorOptions,
      setPrimaryColor,
      setSecondaryColor
    }
  }
