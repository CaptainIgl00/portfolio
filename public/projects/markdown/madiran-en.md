## Context
**TELEO** is an innovative project by **Airbus Defense & Space** in partnership with **ONERA**, aiming to demonstrate the feasibility of laser optical communications between satellites and ground stations. This revolutionary technology enables extremely high transmission rates, essential for ultra-high-resolution satellite imagery.

![Optical Communications](/projects/optical-comms.png)

## Initial Challenge
The project presented several technical challenges:
- Complex communication between the ONERA ground station and the Airbus Mission Control Center
- Multiple protocols to handle (InfluxDB Line Protocol and CCSDS)
- Critical metrics to collect and transmit in real time
- Limited payload testing requiring maximum reliability
- Legacy Matlab scripts to modernize

## My Contribution

### Microservices Architecture
I designed and implemented a robust microservices architecture:
- **Inter-site communication** using Docker containers for the GS-MCC link
- Streamlined data flows and monitoring
