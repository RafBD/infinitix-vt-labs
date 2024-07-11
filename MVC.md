# Cuestionario sobre el Modelo MVC
**1. ¿Qué significa MVC y cuáles son sus componentes principales?**
- El MVC es un patrón de diseño de software el cual se divide en tres componentes principales: modelo, vista y controlador.

**2. Describe la responsabilidad principal del Modelo en el patrón MVC.**
Tiene dos principales responsabilidades: mostrar datos al usuario y recibir interacciones del usuario.

**3. ¿Cuál es la función principal de la Vista en una aplicación MVC?**
Su función principal es definir como se va a mostrar la información o los datos al usuario de una manera sencilla.

**4. Explica cómo interactúa el Controlador con el Modelo y la Vista.**
El controlador recibe las entradas del usuario, luego las procesa, obtiene los resultados y después los envía a la vista para mostrarlos.

**5. ¿Qué ventajas ofrece la separación de responsabilidades en el patrón MVC?**
Facilita el mantenimiento, ya que los componentes están separados por lo que un cambio en alguno no afecta a otros.

**6. Proporciona un ejemplo práctico de cómo el Modelo y la Vista interactúan a través del Controlador en una aplicación web.**
El usuario selecciona algún producto en la Vista, después el controlador recibe la solicitud, verifica la disponibilidad y el precio en el Modelo (que es la BD) y luego actualiza la vista con la información actualizada.

**7. ¿Por qué es importante la modularidad en el diseño de aplicaciones MVC?**
Facilita el mantenimiento de la aplicación, mejora la legibilidad del código y permite ser probada de manera independiente

**8. Menciona una situación en la que el patrón MVC facilita la colaboración entre desarrolladores.**
La colaboración entre desarrolladores se vuelve más fácil, ya que permite que puedan trabajar en el Modelo, la Vista y el Controlador de manera simultanea sin afectarse unos a otros.

**9. ¿Cómo puede el patrón MVC mejorar la reutilización de código en una aplicación?**
Los componentes creados pueden ser utilizados en diferentes partes de la aplicación o incluso en diferentes proyectos, facilitando así el desarrollo.

**10. ¿Cuál es la diferencia principal entre el Modelo y el Controlador en términos de sus responsabilidades?**
El modelo se encarga de la gestión d edatos y la lógica de negocio, mientras que el Controlador gestiona las interacciones del usuario y decide cómo responder a esas interacciones