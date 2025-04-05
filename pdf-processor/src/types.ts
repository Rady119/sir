export type ProcessingOptions = {
  type: 'merge' | 'split' | 'compress' | 'convert';
  settings: {
    quality?: number;
    pageRange?: string;
    outputFormat?: 'docx' | 'pdf';
    isImageToPdf?: boolean;
    order?: string[];
  };
};

export interface PDFFile {
  id: string
  fileName?: string
  name?: string
  originalName: string
  path: string
  size: number
  lastModified?: number
  createdAt: Date
  status?: 'processed' | 'processing' | 'error'
  processingType?: 'compress' | 'convert' | 'merge' | 'split'
  userId: string
}

export interface UserProfile {
  id: string
  email: string
  subscription: 'free' | 'premium'
  usageLimit: number
  usedStorage: number
  totalFiles: number
  createdAt: Date
}

export interface FileListProps {
  files: File[]
  currentPage: number
  filesPerPage: number
  onPageChange: (page: number) => void
  onRemove: (index: number) => void
  searchTerm?: string
  onSearch?: (term: string) => void
  sortBy?: 'name' | 'date' | 'size'
  onSort?: (sortBy: 'name' | 'date' | 'size') => void
}

export interface ToolSettings {
  compress: {
    quality: number
  }
  split: {
    pageRange: string
  }
  convert: {
    outputFormat: 'docx' | 'pdf'
    isImageToPdf?: boolean
  }
  merge: {
    order: string[]
  }
}