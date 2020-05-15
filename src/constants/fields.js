export const details = [
  {
    label: 'Identification',
    prop: 'identification'
  },
  {
    label: 'Nom de l\'animal',
    prop: 'name'
  },
  {
    label: 'Espèce',
    prop: 'type'
  },
  {
    label: 'Date de naissance',
    prop: 'birth',
    type: 'date'
  },
  {
    label: 'Lieu de naissance',
    prop: 'birthPlace'
  },
  {
    label: 'Sexe',
    prop: 'gender',
    type: 'select',
    selectOptions: [
      {
        value: 'F',
        label: 'Femelle'
      },
      {
        value: 'M',
        label: 'Mâle'
      }
    ]
  },
  {
    label: 'Suivi de l\'animal',
    prop: 'following',
    type: 'textarea'
  }
]

export const health = [
  {
    label: 'Poids et taille',
    prop: 'weightSize',
    type: 'textarea'
  },
  {
    label: 'Santé de l\'animal',
    prop: 'animalHealth',
    type: 'textarea'
  },
  {
    label: 'Opérations',
    prop: 'operations',
    type: 'textarea'
  },
  {
    label: 'Mode de contraception',
    prop: 'contraception',
    type: 'textarea'
  },
  {
    label: 'Gestation',
    prop: 'gestation',
    type: 'textarea'
  },
  {
    label: 'Prophylaxie',
    prop: 'prophylaxie',
    type: 'textarea'
  },
  {
    label: 'Anesthésie',
    prop: 'anesthesie',
    type: 'textarea'
  },
  {
    label: 'Observations',
    prop: 'observations',
    type: 'textarea'
  }
]
