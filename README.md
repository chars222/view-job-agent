🤖 AI Job Agent - Portafolio de Arquitectura Multi-Agente

Esta aplicación es un dashboard interactivo diseñado para visualizar, inspeccionar y auditar el flujo de trabajo de un sistema autónomo de búsqueda de empleo basado en agentes de IA.

El sistema permite rastrear ejecuciones en tiempo real, desde la orquestación inicial hasta la notificación final al candidato.

🚀 Características principales

Visualización de Flujo: Diagrama interactivo de los estados de los agentes (Orchestrator, Scraper, Matcher, Reviewer, Notifier).

Inspector de Datos: Panel lateral para revisar prompts, herramientas utilizadas (LLMs, Embeddings, APIs) y resultados obtenidos.

Historial de Ejecuciones: Navegación por sesiones pasadas con indicadores de estado (Éxito/Error).

Diseño Responsive: Interfaz limpia construida con Tailwind CSS, optimizada para escritorio.

🏗️ Stack Tecnológico

Frontend: Astro (Framework) + Tailwind CSS.

Iconografía: Font Awesome.

Datos: Integración lista para consumir APIs REST (con soporte para modo desarrollo mediante mocks).

🛠️ Instalación

Clonar el repositorio:

git clone https://github.com/chars222/view-job-agent.git
cd nombre-del-repo


Instalar dependencias:

npm install


Ejecutar en modo desarrollo:

npm run dev


📊 Arquitectura de Agentes

El flujo de trabajo representado en este dashboard sigue este orden lógico:

Orchestrator: Analiza el CV del usuario y define el plan de búsqueda.

Scraper: Ejecuta la extracción de datos en múltiples plataformas de empleo.

Matcher: Filtra la información utilizando modelos de lenguaje y bases de datos vectoriales.

Reviewer: Aplica reglas de negocio y filtros de calidad.

Notifier: Envía el reporte final y actualiza la base de datos.

🤝 Contribuciones

Siéntete libre de abrir un Issue o enviar un Pull Request si deseas mejorar la interfaz, añadir nuevas visualizaciones de grafos o integrar el backend en tiempo real.

Desarrollado como parte del portafolio de arquitectura de sistemas IA.