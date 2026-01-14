export interface ScopusRaw {
  AuthorName: string;
  AuthID: string;
  DocCount: number;
  SubjectArea: string;
  OrcID: string;
}

export interface WosRaw {
  LinkProfil: string;
  Nama: string;
  WosID: string;
  JumlahDokumen: number;
}

export interface MergedAuthor {
  id: string; // Unique ID (prefer Scopus ID, fallback to WOS ID or generated)
  name: string;
  scopusId?: string;
  wosId?: string;
  scopusDocs: number;
  wosDocs: number;
  totalDocs: number;
  scopusUrl: string[];
  wosUrl?: string[];
  subjects?: string[];
  orcId?: string;
}

export type SortOption = 'totalDocs' | 'name' | 'scopusDocs' | 'wosDocs';