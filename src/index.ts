function hello (): void {
  console.log('Hello World!')
}

// declare let global: any
(global as any).handler = hello
