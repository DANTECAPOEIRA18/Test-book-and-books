import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignorar comprobaciones de serialización para acciones específicas
                ignoredActions: [

                ],
                // Ignorar comprobaciones de serialización para caminos específicos dentro del estado
                ignoredPaths: [

                ],
            },
        }),
});