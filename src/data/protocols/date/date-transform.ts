export interface DateTransform {
  transform: (dateOrigin: Date, format: string) => string
}
