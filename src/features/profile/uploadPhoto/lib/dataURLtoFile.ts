export const dataURLtoFile = (dataUrl: string, fileName: string) => {
  // разделения dataUrl на две части
  const arr = dataUrl.split(',')
  // извлекает MIME-тип из заголовка
  const mimeMatch = arr[0].match(/:(.*?);/)
  const mime = mimeMatch ? mimeMatch[1] : ''

  // декодирует содержимое изображения из формата Base64
  const bstr = atob(arr[1])
  let n = bstr.length
  // новый массив типа Uint8Array, который будет содержать байты изображения
  const u8arr = new Uint8Array(n)

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }

  return new File([u8arr], fileName, { type: mime })
}
