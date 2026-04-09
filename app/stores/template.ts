// /stores/template.ts
export const useTemplateStore = defineStore('template', {
  state: () => ({
    current: null as string | null
  }),

  actions: {
    applyTemplate(name: string) {
      if (name === 'president-era') {
        const overlayStore = useOverlayStore()

        overlayStore.selectPreset('none')
        overlayStore.clearCustomOverlays()
        overlayStore.addOverlay({
          id: 'jokowi-template',
          label: 'Jokowi Era',
          start: '2014-10-20',
          end: '2024-10-20',
          color: '#0ea5e9'
        })
      }

      this.current = name
    }
  }
})
