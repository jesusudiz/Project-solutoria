import { createData } from "@database/queries";


export default  async function createIndicator (req, res) {
    try {
      const {
        nombreIndicador,
        codigoIndicador,
        unidadMedidaIndicador,
        valorIndicador,
        fechaIndicador,
        tiempoIndicador,
        origenIndicador
      } = req.body;
  
      if (
        !nombreIndicador ||
        !codigoIndicador ||
        !unidadMedidaIndicador ||
        !valorIndicador ||
        !fechaIndicador ||
        !origenIndicador
      ) {
        throw new Error("Missing required fields in the request");
      }
  
      await createData(req.body);
  
      res.status(201).json({ message: "Indicator created successfully" });
    } catch (error) {
      console.error("Error creating the indicator:", error);
      res.status(500).json({ error: "Error creating the indicator" });
    }
  };
  