import React from 'react'
import { useForm, useStep } from 'react-hooks-helper'

import Survey from './Survey'
import SurveyTwo from './SurveyTwo'
import UserInfo from './UserInfo'

const steps = [{ id: 'user' }, { id: 'survey1' }, { id: 'survey2' }]

const defaultData = {
  fname: '',
  lname: '',
  email: '',
  password: '',
  role: 'I focus on strategy for a single product',
  struggles: 'Figuring out where to put the next dollar',
}

const Register = () => {
  const [formData, setForm] = useForm(defaultData)

  const { step, navigation } = useStep({ initialStep: 0, steps })
  const { id } = step

  const props = { formData, setForm, navigation }

  switch (id) {
    case 'user':
      return <UserInfo {...props} />
    case 'survey1':
      return <Survey {...props} />
    case 'survey2':
      return <SurveyTwo {...props} />
    default:
      return null
  }
}

export default Register
