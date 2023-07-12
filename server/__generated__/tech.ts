/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: s/06UxN1blm+Yu0TQUssk2QBSs0OoQr+/TUF+s3VNIEJShRskb+UhUCpSiQb9j6KQRB52pmGoKUOPKNR4k37YQ==
 */

/* eslint-disable */
// tslint:disable

interface Tech {
  alternatives: (string) | null
  cons: (string) | null
  pros: (string) | null
  summary: (string) | null
  tech_id: number & {readonly __brand?: 'tech_tech_id'}
  title: string
  udemy_paths: (string) | null
}
export default Tech;

interface Tech_InsertParameters {
  alternatives?: (string) | null
  cons?: (string) | null
  pros?: (string) | null
  summary?: (string) | null
  tech_id: number & {readonly __brand?: 'tech_tech_id'}
  title: string
  udemy_paths?: (string) | null
}
export type {Tech_InsertParameters}
