export interface ContentfulResources {
  title: string
  description: string
  contactItems: string
}

export interface ContentfulSchedules {
  title: string
  days: string
  location: string
  pdfLink: string
  pdf: ContenfulAsset
}

export interface ContentfulAnnouncements {
  name: string
  description: string
  url: string
}

interface ContenfulAsset {
  fields: {
    description: string
    title: string
    file: ContenfulAssetFile
  }
}

interface ContenfulAssetFile {
  fileName: string
  url: string
}
