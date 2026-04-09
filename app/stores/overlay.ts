import { defineStore } from 'pinia'

export interface Overlay {
  id: string
  label: string
  start: string
  end: string
  color: string
}

export interface OverlayPreset {
  id: string
  label: string
  description: string
  overlays: Overlay[]
}

const overlayPresets: OverlayPreset[] = [
  {
    id: 'presidents',
    label: 'All Presidents',
    description:
      'Segment the rate by presidential term across the full modern timeline.',
    overlays: [
      {
        id: 'sukarno',
        label: 'Sukarno Era',
        start: '1945-08-17',
        end: '1967-03-12',
        color: '#ef4444'
      },
      {
        id: 'suharto',
        label: 'Suharto Era',
        start: '1967-03-12',
        end: '1998-05-21',
        color: '#eab308'
      },
      {
        id: 'habibie',
        label: 'B.J. Habibie Era',
        start: '1998-05-21',
        end: '1999-10-20',
        color: '#f59e0b'
      },
      {
        id: 'gusdur',
        label: 'Abdurrahman Wahid Era',
        start: '1999-10-20',
        end: '2001-07-23',
        color: '#14b8a6'
      },
      {
        id: 'megawati',
        label: 'Megawati Era',
        start: '2001-07-23',
        end: '2004-10-20',
        color: '#dc2626'
      },
      {
        id: 'sby',
        label: 'SBY Era',
        start: '2004-10-20',
        end: '2014-10-20',
        color: '#3b82f6'
      },
      {
        id: 'jokowi',
        label: 'Jokowi Era',
        start: '2014-10-20',
        end: '2024-10-20',
        color: '#b91c1c'
      },
      {
        id: 'prabowo',
        label: 'Prabowo Era',
        start: '2024-10-20',
        end: '2029-10-20',
        color: '#f97316'
      }
    ]
  },
  {
    id: 'reformasi',
    label: 'Reformasi Era',
    description: 'Focus on post-1998 presidents only.',
    overlays: [
      {
        id: 'habibie',
        label: 'B.J. Habibie Era',
        start: '1998-05-21',
        end: '1999-10-20',
        color: '#f59e0b'
      },
      {
        id: 'gusdur',
        label: 'Abdurrahman Wahid Era',
        start: '1999-10-20',
        end: '2001-07-23',
        color: '#14b8a6'
      },
      {
        id: 'megawati',
        label: 'Megawati Era',
        start: '2001-07-23',
        end: '2004-10-20',
        color: '#dc2626'
      },
      {
        id: 'sby',
        label: 'SBY Era',
        start: '2004-10-20',
        end: '2014-10-20',
        color: '#3b82f6'
      },
      {
        id: 'jokowi',
        label: 'Jokowi Era',
        start: '2014-10-20',
        end: '2024-10-20',
        color: '#b91c1c'
      },
      {
        id: 'prabowo',
        label: 'Prabowo Era',
        start: '2024-10-20',
        end: '2029-10-20',
        color: '#f97316'
      }
    ]
  },
  {
    id: 'recent',
    label: 'Recent Terms',
    description:
      'Compare the most recent administrations for shorter exchange-rate windows.',
    overlays: [
      {
        id: 'sby',
        label: 'SBY Era',
        start: '2004-10-20',
        end: '2014-10-20',
        color: '#3b82f6'
      },
      {
        id: 'jokowi',
        label: 'Jokowi Era',
        start: '2014-10-20',
        end: '2024-10-20',
        color: '#b91c1c'
      },
      {
        id: 'prabowo',
        label: 'Prabowo Era',
        start: '2024-10-20',
        end: '2029-10-20',
        color: '#f97316'
      }
    ]
  },
  {
    id: 'none',
    label: 'No Overlay',
    description:
      'Show the exchange-rate series without political segmentation.',
    overlays: []
  }
]

export const useOverlayStore = defineStore('overlay', {
  state: () => ({
    presets: overlayPresets,
    selectedPresetId: 'recent',
    customOverlays: [] as Overlay[]
  }),

  getters: {
    selectedPreset(state): OverlayPreset {
      return (
        state.presets.find(
          preset => preset.id === state.selectedPresetId
        ) ?? {
          id: 'none',
          label: 'No Overlay',
          description:
            'Show the exchange-rate series without political segmentation.',
          overlays: []
        }
      )
    },
    overlays(): Overlay[] {
      return [...this.selectedPreset.overlays, ...this.customOverlays]
    }
  },

  actions: {
    selectPreset(presetId: string) {
      this.selectedPresetId = this.presets.some(
        preset => preset.id === presetId
      )
        ? presetId
        : 'none'
    },

    addOverlay(overlay: Overlay) {
      this.customOverlays.push(overlay)
    },

    removeOverlay(id: string) {
      this.customOverlays = this.customOverlays.filter(
        overlay => overlay.id !== id
      )
    },

    clearCustomOverlays() {
      this.customOverlays = []
    }
  }
})
