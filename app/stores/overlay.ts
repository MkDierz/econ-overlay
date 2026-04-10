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
    id: 'idn-presidents',
    label: 'All Indonesian Presidents',
    description: 'Segment the rate by Indonesian presidential term.',
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
    id: 'idn-regimes',
    label: 'Indonesian Political Eras',
    description: 'Old Order, New Order, Reformasi.',
    overlays: [
      {
        id: 'old-order',
        label: 'Old Order',
        start: '1945-08-17',
        end: '1967-03-12',
        color: '#ef4444'
      },
      {
        id: 'new-order',
        label: 'New Order',
        start: '1967-03-12',
        end: '1998-05-21',
        color: '#eab308'
      },
      {
        id: 'reformasi',
        label: 'Reformasi Era',
        start: '1998-05-21',
        end: '2029-10-20',
        color: '#22c55e'
      }
    ]
  },

  {
    id: 'covid-timeline',
    label: 'COVID-19 Phases (Indonesia)',
    description: 'Pandemic phases based on actual Indonesia timeline.',
    overlays: [
      {
        id: 'pre-covid',
        label: 'Pre-Pandemic',
        start: '2018-01-01',
        end: '2020-03-01',
        color: '#10b981'
      },
      {
        id: 'covid-crisis',
        label: 'Pandemic Period',
        start: '2020-03-02',
        end: '2022-12-30',
        color: '#6366f1'
      },
      {
        id: 'transition',
        label: 'Endemic Transition',
        start: '2022-12-31',
        end: '2023-06-21',
        color: '#8b5cf6'
      },
      {
        id: 'post-covid',
        label: 'Post-Pandemic Era',
        start: '2023-06-22',
        end: '2026-12-31',
        color: '#a78bfa'
      }
    ]
  },

  {
    id: 'global-crises',
    label: 'Global Economic Events',
    description: 'Major global financial disruptions.',
    overlays: [
      {
        id: 'asian-crisis',
        label: 'Asian Financial Crisis',
        start: '1997-07-01',
        end: '1998-12-31',
        color: '#7c2d12'
      },
      {
        id: 'dot-com',
        label: 'Dot-com Bubble',
        start: '1997-01-01',
        end: '2001-10-01',
        color: '#94a3b8'
      },
      {
        id: 'gfc',
        label: 'Global Financial Crisis',
        start: '2007-08-01',
        end: '2009-06-30',
        color: '#475569'
      },
      {
        id: 'euro-debt',
        label: 'European Debt Crisis',
        start: '2010-01-01',
        end: '2012-12-31',
        color: '#64748b'
      },
      {
        id: 'covid-global',
        label: 'Global COVID Shock',
        start: '2020-03-01',
        end: '2021-12-31',
        color: '#4338ca'
      },
      {
        id: 'russia-ukraine',
        label: 'Russia–Ukraine War Impact',
        start: '2022-02-24',
        end: '2024-12-31',
        color: '#f43f5e'
      }
    ]
  },

  {
    id: 'idn-milestones',
    label: 'Indonesian Economic Milestones',
    description: 'Key domestic economic shifts.',
    overlays: [
      {
        id: 'afc-build',
        label: 'Pre-Crisis Build Up',
        start: '1995-01-01',
        end: '1997-06-30',
        color: '#a16207'
      },
      {
        id: 'afc-crash',
        label: 'Asian Crisis Crash',
        start: '1997-07-01',
        end: '1998-12-31',
        color: '#7c2d12'
      },
      {
        id: 'afc-recovery',
        label: 'Recovery Phase',
        start: '1999-01-01',
        end: '2002-12-31',
        color: '#15803d'
      },
      {
        id: 'commodity-boom',
        label: 'Commodity Boom',
        start: '2003-01-01',
        end: '2011-12-31',
        color: '#16a34a'
      },
      {
        id: 'commodity-bust',
        label: 'Commodity Downturn',
        start: '2012-01-01',
        end: '2016-12-31',
        color: '#dc2626'
      },
      {
        id: 'tax-amnesty',
        label: 'Tax Amnesty',
        start: '2016-06-28',
        end: '2017-03-31',
        color: '#a855f7'
      }
    ]
  },

  {
    id: 'fed-rate-cycles',
    label: 'US Interest Rate Cycles',
    description: 'Fed policy impact on USD/IDR.',
    overlays: [
      {
        id: 'zlb',
        label: 'Zero Rate Era',
        start: '2009-01-01',
        end: '2015-12-16',
        color: '#22c55e'
      },
      {
        id: 'tightening-1',
        label: 'Rate Hikes Cycle',
        start: '2015-12-17',
        end: '2018-12-31',
        color: '#ef4444'
      },
      {
        id: 'covid-cut',
        label: 'Emergency Cuts',
        start: '2020-03-01',
        end: '2021-12-31',
        color: '#3b82f6'
      },
      {
        id: 'inflation-hikes',
        label: 'Inflation Fight',
        start: '2022-01-01',
        end: '2024-12-31',
        color: '#f97316'
      }
    ]
  },

  {
    id: 'commodity-cycles',
    label: 'Commodity Cycles',
    description: 'Global commodity cycles impacting Indonesia.',
    overlays: [
      {
        id: 'supercycle',
        label: 'Commodity Supercycle',
        start: '2003-01-01',
        end: '2011-12-31',
        color: '#16a34a'
      },
      {
        id: 'downturn',
        label: 'Commodity Downturn',
        start: '2012-01-01',
        end: '2016-12-31',
        color: '#dc2626'
      },
      {
        id: 'recovery',
        label: 'Commodity Recovery',
        start: '2020-01-01',
        end: '2024-12-31',
        color: '#3b82f6'
      }
    ]
  },

  {
    id: 'idn-elections',
    label: 'Indonesian Elections',
    description: 'Election-year uncertainty windows.',
    overlays: [
      {
        id: 'election-2009',
        label: 'Election 2009',
        start: '2009-01-01',
        end: '2009-12-31',
        color: '#a855f7'
      },
      {
        id: 'election-2014',
        label: 'Election 2014',
        start: '2014-01-01',
        end: '2014-12-31',
        color: '#a855f7'
      },
      {
        id: 'election-2019',
        label: 'Election 2019',
        start: '2019-01-01',
        end: '2019-12-31',
        color: '#a855f7'
      },
      {
        id: 'election-2024',
        label: 'Election 2024',
        start: '2024-01-01',
        end: '2024-12-31',
        color: '#a855f7'
      }
    ]
  },
  {
    id: 'global-events',
    label: 'Global Events & Black Swans',
    description:
      'Major geopolitical and systemic shocks impacting global markets.',
    overlays: [
      {
        id: 'gulf-war',
        label: 'Gulf War',
        start: '1990-08-02',
        end: '1991-02-28',
        color: '#78350f'
      },

      {
        id: 'soviet-collapse',
        label: 'Collapse of Soviet Union',
        start: '1991-12-01',
        end: '1992-12-31',
        color: '#64748b'
      },

      {
        id: 'asian-crisis',
        label: 'Asian Financial Crisis',
        start: '1997-07-01',
        end: '1998-12-31',
        color: '#7c2d12'
      },

      {
        id: 'russian-crisis',
        label: 'Russian Financial Crisis',
        start: '1998-08-01',
        end: '1999-03-31',
        color: '#991b1b'
      },

      {
        id: 'dotcom-burst',
        label: 'Dot-com Crash',
        start: '2000-03-01',
        end: '2002-10-01',
        color: '#94a3b8'
      },

      {
        id: '9-11',
        label: '9/11 Attacks',
        start: '2001-09-11',
        end: '2001-12-31',
        color: '#1f2937'
      },

      {
        id: 'iraq-war',
        label: 'Iraq War',
        start: '2003-03-20',
        end: '2011-12-18',
        color: '#92400e'
      },

      {
        id: 'gfc',
        label: 'Global Financial Crisis',
        start: '2007-08-01',
        end: '2009-06-30',
        color: '#111827'
      },

      {
        id: 'euro-crisis',
        label: 'European Debt Crisis',
        start: '2010-01-01',
        end: '2012-12-31',
        color: '#334155'
      },

      {
        id: 'oil-crash',
        label: 'Oil Price Crash',
        start: '2014-06-01',
        end: '2016-02-01',
        color: '#b45309'
      },

      {
        id: 'brexit',
        label: 'Brexit Shock',
        start: '2016-06-23',
        end: '2020-01-31',
        color: '#1d4ed8'
      },

      {
        id: 'us-china-trade-war',
        label: 'US–China Trade War',
        start: '2018-03-22',
        end: '2020-01-15',
        color: '#dc2626'
      },

      {
        id: 'covid-global',
        label: 'COVID Global Shock',
        start: '2020-03-11',
        end: '2021-12-31',
        color: '#4338ca'
      },

      {
        id: 'supply-chain',
        label: 'Global Supply Chain Crisis',
        start: '2021-01-01',
        end: '2023-12-31',
        color: '#0f766e'
      },

      {
        id: 'russia-ukraine',
        label: 'Russia–Ukraine War',
        start: '2022-02-24',
        end: '2026-12-31',
        color: '#ef4444'
      },

      {
        id: 'ai-boom',
        label: 'AI Boom (Generative AI)',
        start: '2022-11-30',
        end: '2026-12-31',
        color: '#7c3aed'
      }
    ]
  },

  {
    id: 'none',
    label: 'No Overlay',
    description: 'Show raw data only.',
    overlays: []
  }
]
export const useOverlayStore = defineStore('overlay', {
  state: () => ({
    presets: overlayPresets,
    selectedPresetId: 'idn-presidents',
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
